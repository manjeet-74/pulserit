import { Button } from "@chakra-ui/react";
import TeamCard from "../TeamCard";

export default function Team() {
    return (
        <>
            <div className="my-6 flex space-x-6 flex-start items-center mx-4 mt-4">
                <h1 className="bg-pulserit_color text-black text-3xl 
                    rounded-xl px-4 font-aptos mb-6">Team</h1>
                <p className="text-black font-aptos w-1/2">Meet the skilled and experienced
                    team behind our successful digital marketing strategies</p>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <TeamCard
                    key="1"
                    name="John Doe"
                    description="This is a team member"
                    image="fsakdjl"
                />
                <TeamCard
                    key="2"
                    name="John Doe"
                    description="This is a team member"
                    image="fsakdjl"
                />
                <TeamCard
                    key="3"
                    name="John Doe"
                    description="This is a team member"
                    image="fsakdjl"
                />
                <TeamCard
                    key="4"
                    name="John Doe"
                    description="This is a team member"
                    image="fsakdjl"
                />
            </div>
            <div className="flex justify-end text-black p-4">
                <Button className="bg-black text-white 
            p-4 rounded-xl">See all team</Button>
            </div>
        </>
    );
}