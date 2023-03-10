import { Alert, Avatar, Flex, Text, TextInput } from "@mantine/core";

import React, { useState } from "react";
import { useMqttState } from "../Mqtt";

const Header = () => {
  const [deviceId, setDeviceId] = useState("device1");
  const { connectionStatus } = useMqttState();
  return (
    <Flex
      w={"100%"}
      justify={"space-between"}
      align="baseline"
      gap={"md"}
      direction={"column"}
    >
      {/* <TextInput
        styles={(theme) => ({
          label: {
            marginBottom: theme.spacing.xs,
          },
        })}
        size="md"
        label="Device ID"
        value={deviceId}
        onChange={(event) => setDeviceId(event.currentTarget.value)}
      /> */}
      <Flex w={"100%"} gap={"sm"} align={"baseline"} justify={"flex-end"}>
        <Text fw={500} size="md">Maulik Patel</Text>
        <Avatar color="cyan" radius="xl">
          MP
        </Avatar>
      </Flex>

      <Flex w={"100%"} gap={"sm"} align={"baseline"} justify={"flex-end"}>


      <Alert w={"100%"} color={"green"} title="Connection Status" >
        {connectionStatus.toString()}
      </Alert>
      </Flex>
    </Flex>
  );
};

export default Header;
