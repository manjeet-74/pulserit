"use client";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Card from "@/components/Card/index";

export default function Clubs() {
    return (
        <>
            <Header />
            <Banner />
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}