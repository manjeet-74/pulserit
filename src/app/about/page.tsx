"use client"
import ClubDetailsCard from "@/components/ClubDetailsCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import SubHeading from "@/components/SubHeading";

export default function Page() {
    const imageLink = "https://images.unsplash.com/photo-1736077722346-31ba59414728?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const sendEmail = () => {
        console.log("Send email");
    }

    return (
        <>
            <Header />
            <div className="bg-white flex flex-col min-h-screen p-6 text-black">
                <ClubDetailsCard
                    clubName="Pulserit"
                    description="Pulserit is a club that focuses on web development and design."
                    image="https://images.unsplash.com/photo-1736077722346-31ba59414728?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                {/* Our impact in numbers */}
                <div className="my-6 border-2 border-balck rounded-2xl p-6">
                    <SubHeading
                        title="Our impact in numbers"
                        description="We have been able to achieve the following milestones"
                    />
                    <div className="flex">
                        <div className="flex-1 p-4 border-t-4 border-black rounded-2xl">
                            <h2 className="text-2xl font-aptos">1000+</h2>
                            <p className="font-aptos">Members</p>
                        </div>
                        <div className="flex-1 p-4 border-t-4 border-black rounded-2xl">
                            <h2 className="text-2xl font-aptos">50+</h2>
                            <p className="font-aptos">Projects</p>
                        </div>
                        <div className="flex-1 p-4 border-t-4 border-black rounded-2xl">
                            <h2 className="text-2xl font-aptos">10+</h2>
                            <p className="font-aptos">Clubs</p>
                        </div>
                        <div className="flex-1 p-4 border-t-4 border-black rounded-2xl">
                            <h2 className="text-2xl font-aptos">10+</h2>
                            <p className="font-aptos">Clubs</p>
                        </div>
                        <div className="flex-1 p-4 border-t-4 border-black rounded-2xl">
                            <h2 className="text-2xl font-aptos">10+</h2>
                            <p className="font-aptos">Clubs</p>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Our journey */}
                <div className="flex flex-col my-6 border-grey border-2 rounded-2xl p-6">
                    <SubHeading
                        title="Our Journey"
                        description="We have been able to achieve the following milestones"
                    />
                    <div className={`flex flex-col items-center`}>
                        {[2019, 2020, 2021, 2022, 2023].map((year, index) => {
                            return (
                                <BlogCard
                                    key={index}
                                    year={year}
                                    title={index === 0 ? "The beginning" : `Year ${year}`}
                                    description="PulseRit was founded to help clubs navigate the digital world and achieve online success."
                                    align={index % 2 === 0 ? "justify-start" : "justify-end"}
                                />
                            )
                        })}
                    </div>
                </div>
                <hr />
                {/* Core Values */}
                <div className="flex flex-col my-6 border-grey border-2 rounded-2xl p-6">
                    <SubHeading
                        title="Our Core Values"
                        description="Our core values are the guiding principles that help us to deliver value to our clients and achieve success."
                    />
                    <div className="grid grid-cols-2 gap-6">
                        {
                            ["Client Success First", "Innovation", "Collaboration", "Integrity"].map((value, index) => {
                                return (
                                    <CoreValuesCard
                                        key={index}
                                        title={value}
                                        description="We are committed to delivering value to our clients, and we do this by ensuring that we put their needs first."
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                {/* positive Quote */}
                <PositiveQuoteCard
                    quote="At some club, Along with work we develop some really unbbreakable bonds"
                    by="John Doe"
                    image="https://images.unsplash.com/photo-1737453642091-804a18d5deaa?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                {/* Awards and Recognition */}
                <div className="flex flex-col">
                    <SubHeading
                        title="Awards and Recognition"
                        description="We have been able to achieve the following milestones"
                    />
                    <div className="grid grid-cols-4 gap-6">
                        <AwardsCard
                            title="Best Club of the Year"
                            description="We have been able to achieve the following milestones and we have been able to achieve the following milestones"
                            image="https://images.unsplash.com/photo-1737453642091-804a18d5deaa?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <AwardsCard
                            title="Best Club of the Year"
                            description="We have been able to achieve the following milestones and we have been able to achieve the following milestones"
                            image="https://images.unsplash.com/photo-1737453642091-804a18d5deaa?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <AwardsCard
                            title="Best Club of the Year"
                            description="We have been able to achieve the following milestones and we have been able to achieve the following milestones"
                            image="https://images.unsplash.com/photo-1737453642091-804a18d5deaa?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <AwardsCard
                            title="Best Club of the Year"
                            description="We have been able to achieve the following milestones and we have been able to achieve the following milestones"
                            image="https://images.unsplash.com/photo-1737453642091-804a18d5deaa?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                </div>

                {/* Join Our Club */}
                <div className="my-6 flex items-center p-6 bg-pulserit_color border-2 border-black border-b-4 rounded-2xl">
                    <div className="flex flex-col w-2/3">
                        <h1 className="text-2xl font-aptos font-bold my-4">Join our Club</h1>
                        <p className="font-aptos mt-4">
                            We are always looking for talented individuals to join our team. If you are passionate about web development and design, then we would love to hear from you.
                        </p>
                        <button onClick={sendEmail} className="bg-black text-white mt-2 w-24 rounded-lg p-2">Apply Now</button>
                    </div>
                    <img src={imageLink} alt="award" className="w-1/3 my-4 rounded-2xl" />
                </div>
                <Footer />
            </div>
        </>
    );
}

interface BlogCardProps {
    year: number;
    title: string;
    description: string;
    align: string; // 'items-start' or 'items-end'
}

function BlogCard({ year, title, description, align }: BlogCardProps) {
    return (
        <div className={`flex space-x-5 mt-5 lg:${align} lg:w-3/4`}>
            <h1 className="text-4xl">{year}</h1>
            <div className={`flex lg:w-1/3 flex-col bg-black rounded-2xl p-6 text-white`}>
                <h1 className="text-2xl font-aptos mb-4">{title}</h1>
                <p className="font-aptos">{description}</p>
            </div>
        </div>
    );
}

interface CoreValuesCardProps {
    title: string;
    description: string;
}

function CoreValuesCard({ title, description }: CoreValuesCardProps) {
    return (
        <div className={`flex flex-col rounded-2xl p-6 w-full border-black border-2 border-b-4 mt-4`}>
            <h1 className="text-2xl font-aptos mb-2">{title}</h1>
            <hr />
            <p className="font-aptos mt-2">{description}</p>
        </div>
    )
}


// Positive Quote card 
interface PositiveQuoteCardProps {
    quote: string;
    by: string;
    image?: string;
}
function PositiveQuoteCard({ quote, by, image }: PositiveQuoteCardProps) {
    return (
        <div className="flex justify-self-center w-3/4 bg-black text-white rounded-2xl p-6 mt-6">
            <div className="flex-1">
                <img src={image} alt="positive quote" className="w-1/2" />
            </div>
            <div className="flex flex-col items-center w-1/2">
                <h1 className="text-2xl font-aptos">Positive Quote</h1>
                <p className="font-aptos">{quote}</p>
                <p className="font-aptos">- {by}</p>
            </div>
        </div>
    )
}

// Awardds and Recognition Card
interface AwardsCardProps {
    title: string;
    description: string;
    image: string;
}
function AwardsCard({ title, description, image }: AwardsCardProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-grey rounded-2xl">
            <img src={image} alt="award" className="w-1/2 my-4" />
            <h1 className="text-2xl font-aptos font-bold my-4">{title}</h1>
            <p className="font-aptos mt-4">{description}</p>
        </div>
    )
}
