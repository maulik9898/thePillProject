import { Flex, Title } from "@mantine/core";
import React from "react";
import Pill from "./Pill";

const Pills = () => {
  return (
    <Flex gap="xl" w={"100%"} direction="column">
      <Title order={2}>Pills</Title>
      <Flex gap="lg" w={"100%"} justify="space-evenly">
        <Pill pillId="p1" />
        <Pill pillId="p2" />
        <Pill pillId="p3" />
      </Flex>
    </Flex>
  );
};

export default Pills;
