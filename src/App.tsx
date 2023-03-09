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
      bg={"gray"}
      direction={"column"}
      h={"100%"}
    >
      <Connector brokerUrl="wss://broker.emqx.io:8084/mqtt">
        <Header />
        <Pills />
        <Alarms />
      </Connector>
    </Flex>
  );
}

export default App;
