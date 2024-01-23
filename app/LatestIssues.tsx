import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size={"4"} mb={"5"}>
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map(({ id, title, status, assignedToUser }) => (
            <Table.Row key={id}>
              <Table.Cell>
                <Flex justify={"between"}>
                  <Flex direction={"column"} align={"start"} gap={"2"}>
                    <Link href={`/issues/${id}`}>{title}</Link>
                    <IssueStatusBadge status={status} />
                  </Flex>
                  {assignedToUser && (
                    <Avatar
                      src={assignedToUser.image!}
                      fallback="?"
                      size={"2"}
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
