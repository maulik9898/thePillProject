import { Flex } from "@mantine/core";

import { useState } from "react";
import Alarms from "./Components/Alarms";
import Header from "./Components/Header";
import Pills from "./Components/Pills";
import { Connector } from "./Mqtt";

function App() {
  return (
    <Flex
      gap={"xl"}
      p={"lg"}
      align={"center"}
      w={"100vw"}
      direction={"column"}
      h={"100vh"}
    >
      <Connector brokerUrl="ws://broker.mqttdashboard.com:8000/mqtt">
        <Header />
        <Pills />
        <Alarms />
      </Connector>
    </Flex>
  );
}

export default App;
