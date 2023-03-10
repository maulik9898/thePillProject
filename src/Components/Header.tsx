import {
  Alert,
  Avatar,
  DefaultMantineColor,
  Flex,
  Text,
  TextInput,
} from "@mantine/core";

import React, { useState } from "react";
import { connectionStatus, useMqttState } from "../Mqtt";

const getColor = (status: connectionStatus): DefaultMantineColor => {
  switch (status) {
    case "Connected":
      return "green";
    case "Connecting":
      return "blue";
    case "Reconnecting":
      return "yellow";
    case "Offline":
      return "red";
    default:
      return "gray";
  }
};

const Header = () => {
  const [deviceId, setDeviceId] = useState("device1");
  const { connectionStatus } = useMqttState();

  const color = getColor(connectionStatus);
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
        <Text fw={500} size="md">
          Maulik Patel
        </Text>
        <Avatar color="cyan" radius="xl">
          MP
        </Avatar>
      </Flex>

      <Flex w={"100%"} gap={"sm"} align={"baseline"} justify={"flex-end"}>
        <Alert
          w={"100%"}
          color={color}
          title="Connection Status"
        >
          {connectionStatus.toString()}
        </Alert>
      </Flex>
    </Flex>
  );
};

export default Header;
