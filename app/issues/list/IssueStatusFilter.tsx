"use client"

import React from "react";
import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

/**
 * Component for filtering issues by status.
 */
const IssueStatusFilter: React.FC = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map(({ label, value }) => (
          <Select.Item key={value} value={value || ""}>
            {label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
