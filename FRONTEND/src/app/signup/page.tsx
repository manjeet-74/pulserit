"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { useState, FormEvent } from "react";

const SignupPage = () => {
  const [role, setRoloe] = useState("student");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    usn: "",
    club: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User created successfully");
      } else {
        alert("Failed to create user");
      }
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:justify-between bg-gray-50 lg:border-x-white dark:bg-gray-900 dark:text-white">
      <ThemeToggle />
      {/* Form Section */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 m-4 lg:m-16">
        <h1 className="text-3xl text-black dark:text-white font-bold mb-6 text-center">
          Signup
        </h1>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

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

          {/* Role Input */}
          {(role === "student" || role === "admin") && (
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="usn"
              >
                USN
              </label>
              <input
                type="string"
                id="usn"
                value={user.usn}
                onChange={(e) => setUser({ ...user, usn: e.target.value })}
                placeholder="Enter your USN"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          )}

          {(role === "teacher" || role === "admin") && (
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="club"
              >
                Club Name
              </label>
              <input
                type="string"
                id="club"
                value={user.club}
                onChange={(e) => setUser({ ...user, club: e.target.value })}
                placeholder="Club Name"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              I agree to the terms & policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};



export default SignupPage;
