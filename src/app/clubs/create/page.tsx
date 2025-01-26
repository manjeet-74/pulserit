"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Clubs() {
    const router = useRouter();
    const [club, setClub] = useState({
        name: "",
        description: "",
        socialMediaLinks: "#",
        websiteLink: "#",
        logo: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        creator: "",
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(club);
        try {
            const response = await axios.post("/api/clubs/create", club);
            console.log(response.status);
            if(response.status === 201){
                alert("Club created successfully");
                router.push("/clubs");
            }
            console.log("done");
        } catch (error) {
            console.log("Club creation failed", error);

        }
    }

    return (
        <div className="bg-white ">
            <Header />
            <form className="my-6 flex justify-center" onSubmit={handleSubmit}>
                <div className="space-y-12 w-1/2">
                    <div className="w-full border-b border-gray-900/10 pb-12 text-center">
                        <h2 className="text-base/7 font-semibold text-gray-900">Create a Club</h2>

                        <div className="w-full mt-10 flex flex-col gap-x-6 gap-y-8 ">
                            <div className="w-full sm:col-span-4 flex flex-col align-middle justify-center">
                                <div className="flex flex-col items-start w-full">
                                    <label
                                        className="block text-sm font-medium text-black my-2"
                                        htmlFor="name"
                                    >
                                        Club Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={club.name}
                                        onChange={(e) => setClub({ ...club, name: e.target.value })}
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full flex flex-col items-start w-full">
                                <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    value={club.description}
                                    onChange={(e) => setClub({ ...club, description: e.target.value })}
                                />
                            </div>

                            <div className="w-full sm:col-span-4 flex flex-col align-middle justify-center">
                                <div className="flex flex-col items-start w-full">
                                    <label
                                        className="block text-sm font-medium text-black my-2"
                                        htmlFor="name"
                                    >
                                        Instagram Link
                                    </label>
                                    <input
                                        type="text"
                                        id="socialMediaLink"
                                        value={club.socialMediaLinks}
                                        onChange={(e) => setClub({ ...club, socialMediaLinks: e.target.value })}
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                                    />
                                </div>
                            </div>

                            <div className="w-full sm:col-span-4 flex flex-col align-middle justify-center">
                                <div className="flex flex-col items-start w-full">
                                    <label
                                        className="block text-sm font-medium text-black my-2"
                                        htmlFor="name"
                                    >
                                        Website Link
                                    </label>
                                    <input
                                        type="text"
                                        id="websiteLink"
                                        value={club.websiteLink}
                                        onChange={(e) => setClub({ ...club, websiteLink: e.target.value })}
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full flex justify-center text-center items-center">
                                <label htmlFor="photo" className="mx-4 block text-sm/6 font-medium text-gray-900">
                                    Logo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>


            </form>


            <Footer />
        </div>
    )
}