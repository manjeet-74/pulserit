"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@chakra-ui/react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useRef, useState } from "react";

export const WorkProcessBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen} className={`my-4 border-2 flex flex-col items-center transition-colors duration-300 rounded-2xl ${isOpen ? "bg-pulserit_color" : "bg-white"
            }`}>
            {/* Trigger Section */}
            <Collapsible.Trigger
                className={`text-black p-4 w-full py-3 
                    }`}
            >
                <div className="flex justify-between p-4 items-center w-full">
                    <h1>Consultation</h1>
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="border-2 p-2 rounded-full"/>
                </div>
            </Collapsible.Trigger>

<hr className="w-3/4 border-black" />
            {/* Collapsible Content Section */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen
                        ? `${contentRef.current?.scrollHeight || 0}px`
                        : "0px",
                    transition: "max-height 0.3s ease-in-out",
                    overflow: "hidden",
                }}
                className="w-full"
            >
                <Box
                    padding="4"
                    borderWidth="1px"
                    className={`text-black`}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </Box>
            </div>
        </Collapsible.Root>
    );
};
