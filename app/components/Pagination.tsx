"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Flex, Text, Button } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align={"center"} gap="2">
      <Text size={"2"} className="mr-4">
        Page {currentPage} of {pageSize}
      </Text>
      <Button
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
        color="gray"
        variant="soft"
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        color="gray"
        variant="soft"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pageCount}
        color="gray"
        variant="soft"
      >
        <ChevronRightIcon />
      </Button>
      <Button
        onClick={() => changePage(pageCount)}
        disabled={currentPage === pageCount}
        color="gray"
        variant="soft"
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
