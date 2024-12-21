import Link from "next/link";
import { useState, FormEvent } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
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
    <div
      className="min-h-screen flex flex-col items-center justify-center 
    lg:justify-between bg-gray-50 lg:border-x-white"
    >
      {/* Form Section */}
      <div
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8 
      m-4 lg:m-16"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Get Started Now</h1>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
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
              className="w-full border border-gray-300 rounded-md px-4 
              py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
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
              className="w-full border border-gray-300 rounded-md px-4 
              py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
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
              className="w-full border border-gray-300 rounded-md px-4 
              py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-green-600 border-gray-300 rounded
               focus:ring-green-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm 
            text-gray-700"
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
        <p className="mt-4 text-center text-sm text-gray-500">
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