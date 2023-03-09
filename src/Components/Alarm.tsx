import {
  Button,
  Chip,
  ColorSwatch,
  Flex,
  Group,
  Input,
  InputBase,
  Paper,
  Select,
  Text,
  Title,
} from "@mantine/core";

import dayjs from "dayjs";

import React, { useEffect, useRef } from "react";
import { useSubscription } from "../Mqtt";

const Alarm = ({ alarmId }: { alarmId: string }) => {
  const { message, client } = useSubscription(
    [`/thepillproject/device1/${alarmId}`],
    {
      qos: 2,
    }
  );

  const [hour, setHour] = React.useState("10");
  const [minute, setMinute] = React.useState("00");
  const [ampm, setAmpm] = React.useState("AM");
  const [loading, setLoading] = React.useState(false);

  const [weeks, setWeeks] = React.useState<string[]>([]);
  const [payload, setPayload] = React.useState<string>("");

  const ref = useRef<HTMLInputElement>();
  useEffect(() => {
    const data = message?.message?.toString().split(" ");
    if (message?.message?.toString() != payload) {
      if (data) {
        const t = data[1] + ":" + data[0];
        console.log(t);
        const date = dayjs("1/1/1 " + t).format("hh:mm A");
        console.log(date);
        const [time, a] = date.split(" ");
        const [h, m] = time.split(":");
        setHour(h);
        setMinute(m);
        setAmpm(a);
        if (data[4] == "*") {
          setWeeks(["0", "1", "2", "3", "4", "5", "6"]);
        } else {
          setWeeks(data[4].split(","));
        }
      }
    }
  }, [message]);

  useEffect(() => {
    const topic = `/thepillproject/device1/${alarmId}`;
    client?.publish(topic, payload, { qos: 2, retain: true }, (err) => {
      if (err) {
        console.log(err);
      }
      setLoading(false);
    });
  }, [payload]);

  const handleOnClick = () => {
    setLoading(true);
    const time = dayjs(`1/1/1 ${hour}:${minute} ${ampm}`).format("HH:mm");
    var days = weeks.join(",");
    const [h, m] = time.split(":");

    if (days == "0,1,2,3,4,5,6") {
      days = "*";
    }
    const payload = `${m} ${h} * * ${days}`;
    setPayload(payload);
  };

  return (
    <Paper w={"100%"} withBorder p="sm" radius="md">
      <Text mb={"sm"} tt="uppercase" fw={700} fz="sm">
        Alarm {alarmId}
      </Text>
      <Flex w={"100%"} gap={"md"} align="center" justify={"center"}>
        <Flex w={"75%"} gap={"md"} align="center" justify={"space-around"}>
          <Select
            size={"lg"}
            styles={{
              rightSection: {
                display: "none",
              },
              input: {
                padding: 0,
                textAlign: "center",
                fontWeight: 700,
              },
              item: {
                margin: 2,
                padding: 5,
                alignSelf: "center",
                textAlign: "center",
              },
            }}
            clearable={false}
            value={hour}
            onChange={(event) => setHour(event!)}
            data={[
              { value: "01", label: "01" },
              { value: "02", label: "02" },
              { value: "03", label: "03" },
              { value: "04", label: "04" },
              { value: "05", label: "05" },
              { value: "06", label: "06" },
              { value: "07", label: "07" },
              { value: "08", label: "08" },
              { value: "09", label: "09" },
              { value: "10", label: "10" },
              { value: "11", label: "11" },
              { value: "12", label: "12" },
            ]}
          />
          :
          <Select
            styles={{
              rightSection: {
                display: "none",
              },
              input: {
                padding: 0,
                textAlign: "center",
                fontWeight: 700,
              },
              item: {
                margin: 2,
                padding: 5,
                alignSelf: "center",
                textAlign: "center",
              },
            }}
            clearable={false}
            size="lg"
            value={minute}
            onChange={(event) => setMinute(event!)}
            data={Array.from(Array(60).keys()).map((i) => {
              return {
                value: i.toString().padStart(2, "0"),
                label: i.toString().padStart(2, "0"),
              };
            })}
          />
          <Text> </Text>
          <Select
            styles={{
              rightSection: {
                display: "none",
              },
              input: {
                padding: 0,
                textAlign: "center",
                fontWeight: 700,
              },
              item: {
                margin: 2,
                padding: 5,
                alignSelf: "center",
                textAlign: "center",
              },
            }}
            size="lg"
            clearable={false}
            value={ampm}
            onChange={(event) => setAmpm(event!)}
            data={[
              { value: "AM", label: "AM" },
              { value: "PM", label: "PM" },
            ]}
          />
        </Flex>
      </Flex>

      <Flex justify={"center"}></Flex>
      <Text mt={"sm"} mb={"sm"} c="dimmed" tt="uppercase" fw={700} fz="xs">
        Repeat
      </Text>
      <Chip.Group value={weeks} onChange={(value) => setWeeks(value)} multiple>
        <Flex justify={"space-evenly"}>
          <Chip variant={"filled"} size={"xs"} value="0">
            S
          </Chip>

          <Chip variant={"filled"} size={"xs"} value="1">
            M
          </Chip>
          <Chip variant={"filled"} size={"xs"} value="2">
            T
          </Chip>
          <Chip variant={"filled"} size={"xs"} value="3">
            W
          </Chip>
          <Chip variant={"filled"} size={"xs"} value="4">
            T
          </Chip>
          <Chip variant={"filled"} size={"xs"} value="5">
            F
          </Chip>
          <Chip variant={"filled"} size={"xs"} value="6">
            S
          </Chip>
        </Flex>
      </Chip.Group>
      <Button loading={loading} onClick={handleOnClick} color={"green"} fullWidth mt={"sm"}>
        Save
      </Button>
    </Paper>
  );
};

export default Alarm;
