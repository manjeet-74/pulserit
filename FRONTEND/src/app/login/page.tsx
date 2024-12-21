import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 lg:border-x-white">
      {/* Form Section */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 m-4 lg:m-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Get Started Now</h1>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
        <p className="mt-4 text-center text-sm text-gray-500">
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
