import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const statuses: {
    label: string;
    value: number;
    Status: Status;
  }[] = [
    { label: "Open Issues", value: open, Status: Status.OPEN },
    {
      label: "In Progress Issues",
      value: inProgress,
      Status: Status.IN_PROGRESS,
    },
    { label: "Closed Issues", value: closed, Status: Status.CLOSED },
  ];
  return (
    <Flex gap={"3"}>
      {statuses.map(({ label, value, Status }) => (
        <Card key={label}>
          <Flex direction={"column"} gap={"1"}>
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${Status}`}
            >
              {label}
            </Link>
            <Text size={"5"} className="font-bold">
              {value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
