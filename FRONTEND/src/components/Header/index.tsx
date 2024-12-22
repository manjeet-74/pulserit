import { Heading } from "../Heading";
import { Text } from "../Text";
import { Button } from "../Button";
import Link from "next/link";
import React from "react";

interface Props {
  classNmae?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <>
      <header
        {...props}
        className={`${props.classNmae} flex md:flex-col 
        justify-between items-center p-4 md:mx-0`}
      >
        PULSERIT
      </header>
      <div>
        <ul className="gap-10 !mb-2 flex flex-wrap self-end">
          <li>
            <Link href="#">
              <Text as="p" className="text-[18px] font-normal text-black-900">
                About us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p" className="text-[18px] font-normal text-black-900">
                About us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p" className="text-[18px] font-normal text-black-900">
                About us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p" className="text-[18px] font-normal text-black-900">
                About us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p" className="text-[18px] font-normal text-black-900">
                About us
              </Text>
            </Link>
          </li>
        </ul>
        <div className="gap-[18px] flex">
          <Button
            color="gray_900_01"
            size="xl"
            variant="outline"
            shape="round"
            className="rounded-[10px] !border min-w-[114px] px-[33px] sm:px-5"
          >
            LOGIN
          </Button>
          <Button
            color="gray_900_01"
            size="xl"
            shape="round"
            className="rounded-[10px] !border min-w-[114px] px-[33px] sm:px-5"
          >
            LOGIN
          </Button>
        </div>
      </div >
    </>
  );
}
