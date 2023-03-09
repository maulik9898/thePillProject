import { Alert, Flex, Text, TextInput } from "@mantine/core";

import React, { useState } from "react";
import { useMqttState } from "../Mqtt";

const Header = () => {
  const [deviceId, setDeviceId] = useState("device1");
  const { connectionStatus } = useMqttState();
  return (
    <Flex w={"100%"} justify={"space-between"} align="baseline">
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
      <Alert w={"100%"} color={ "green"} title={connectionStatus.toString()}>{}</Alert>
    </Flex>
  );
};

export default Header;
