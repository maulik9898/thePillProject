import { Flex, Title } from "@mantine/core";

import React from "react";
import Alarm from "./Alarm";
import Pill from "./Pill";


const Alarms = () => {
  return (
   
      <Flex gap="xl" w={"100%"} direction="column">
        <Title order={2}>Alarms</Title>
        <Flex gap="xl" w={"100%"} direction="column" justify="space-between">
          <Alarm alarmId="a1" />
          <Alarm alarmId="a2" />
          <Alarm alarmId="a3" />
        </Flex>
      </Flex>
   
  );
};

export default Alarms;
