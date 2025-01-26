"use client";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Card from "@/components/Card/index";
import CaseStudyCard from "@/components/CaseStudyCard";
import { WorkProcessBox } from "@/components/WorkProcessBox";
import { Box, Button } from "@chakra-ui/react";
import Testimonials from "@/components/Testismonial";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Clubs() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "s@g.c",
        role: "admin"
    });

    const getUserDetails = async () => {
        try {
            console.log("Call to /api/user");
            const res = await axios.get("/api/user");
            console.log(res.data);
            setUser(res.data.data);
        } catch (error: any) {
            console.log("~~~~~~~~~~~~~~ Error ~~~~~~~~~~~~~~");
            console.log(error.message);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div className=" bg-white p-4">
            <Header />
            <h1 className="text-black"> {`Name: ${user.name}, Role: ${user.role} `}</h1>
            <Banner />
            <hr />
            <div className="flex flex-col items-center text-black">
                <h1 className="text-black my-4 mb-4 text-4xl">List of clubs</h1>
                <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <hr />
            {/* case studies */}
            <div className="my-4 p-4">
                <div className="flex space-x-6 flex-start items-center">
                    <h1 className="bg-pulserit_color text-black text-3xl rounded-xl px-4">Case Studies</h1>
                    <p className="text-black font-aptos w-1/2">Explore Real-Life Examples of Our Proven
                        Digital Marketing Success through Our Case Studies</p>
                </div>

                <div className="bg-black rounded-3xl flex items-center p-4 py-8 mt-4">
                    <CaseStudyCard />
                    <div className="w-px h-full bg-white mx-4"></div>
                    <CaseStudyCard />
                    <div className="w-px h-full bg-white mx-4"></div>
                    <CaseStudyCard />
                </div>
            </div>
            <hr />

            {/* work process */}
            <div className="flex space-x-6 flex-start items-center mx-4 mt-4">
                <h1 className="bg-pulserit_color text-black text-3xl 
                    rounded-xl px-4 font-aptos">Our Work Process</h1>
                <p className="text-black font-aptos w-1/4">Step-by-Step
                    Guide to Achieving Your Business Goals</p>
            </div>
            <div className="flex flex-col my-4 p-4">
                <WorkProcessBox />
                <WorkProcessBox />
                <WorkProcessBox />
                <WorkProcessBox />
                <WorkProcessBox />
                <WorkProcessBox />
            </div>

            {/* Team  */}
            <div className="flex space-x-6 flex-start items-center mx-4 mt-4">
                <h1 className="bg-pulserit_color text-black text-3xl 
                    rounded-xl px-4 font-aptos">Team</h1>
                <p className="text-black font-aptos w-1/2">Meet the skilled and experienced
                    team behind our successful digital marketing strategies</p>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-end text-black p-4">
                <Button className="bg-black text-white 
            p-4 rounded-xl">See all team</Button>
            </div>

            {/* Testimonial  */}
            <div className="flex space-x-6 flex-start items-center mx-4 mt-4">
                <h1 className="bg-pulserit_color text-black text-3xl 
                    rounded-xl px-4 font-aptos">Testimonial</h1>
                <p className="text-black font-aptos w-1/2">Hear from Our Satisfied Clients:
                    Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
            <Testimonials />

            {/* Contatct Us  */}
            <div className="flex space-x-6 flex-start items-center mx-4 mt-4">
                <h1 className="bg-pulserit_color text-black text-3xl 
                    rounded-xl px-4 font-aptos">Contatc Us</h1>
                <p className="text-black font-aptos w-1/2">Connect with
                    Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>
            <ContactUs />
            <Footer />

        </div>
    );
}