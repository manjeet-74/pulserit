"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";



const LoginPage = () => {
  const Router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user);

    try {
      console.log("Calling api....");
      
      const response = await axios.post("/api/login", user);
      console.log("Api called successfully");
      

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        console.log("Login successful");
        Router.push("/clubs");
        alert("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.log("Login failed", error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:justify-between bg-gray-50 lg:border-x-white dark:bg-gray-900 dark:text-white">
      <ThemeToggle />
      {/* Form Section */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 m-4 lg:m-16">
        <h1 className="text-3xl text-black dark:text-white font-bold mb-6 text-center">
          Welcome to PULSERIT
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
