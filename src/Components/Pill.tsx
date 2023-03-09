import { Flex, Paper, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { useSubscription } from "../Mqtt";

const Pill = ({ pillId }: { pillId: string }) => {
  const { message } = useSubscription([`/thepillproject/device1/${pillId}`]);
  return (
    <Paper withBorder p="lg" radius="md">
      <Text c="dimmed" tt="uppercase" fw={700} fz="sm">
        #{pillId.charAt(1)} Pills
      </Text>
      <Text c={"blue"} align="center" fw={700} fz="xl">
        {message?.message?.toString()}
      </Text>
    </Paper>
  );
};

export default Pill;
