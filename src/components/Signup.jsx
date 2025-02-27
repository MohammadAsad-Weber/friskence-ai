import React from "react";
import { Link } from "react-router"; // Link Component
import Sunset from "../assets/sunset.png"; // Sunset Image

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Signup() {
  // Title for the page
  document.title = "FRISKENCE AI - Signup";

  return (
    <section id="signup" className="h-fit max-w-[350px] w-[85vw] pt-3.5 px-5 pb-10 flex flex-col items-center gap-[1.875rem] bg-[var(--container)] rounded-xl lg:max-w-[980px] lg:p-3.5 lg:pr-10 lg:flex-row lg:gap-10">
      {/* Sunset Image */}
      <img
        src={Sunset}
        alt="Sunset Image"
        className="aspect-square max-w-md w-full rounded-lg"
      />
      {/* Container */}
      <div className="w-full flex flex-col gap-5">
        {/* Heading */}
        <h1 className="text-[1.625rem] font-medium">Create an account</h1>
        {/* Form */}
        <form action="" className="flex flex-col gap-2.5">
          {/* Paragraph with Login Link */}
          <p className="text-[var(--text-secondary)]">
            Already have an account?
            <Link
              to="/login"
              className="cursor-pointer ml-1.5 text-[var(--link)] underline"
            >
              Log in
            </Link>
          </p>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            required={true}
            className="w-full py-1.5 px-5 bg-[var(--input-bg)] outline-none rounded-md placeholder:text-[var(--placeholder)]"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            required={true}
            className="w-full py-1.5 px-5 bg-[var(--input-bg)] outline-none rounded-md placeholder:text-[var(--placeholder)]"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            required={true}
            className="w-full py-1.5 px-5 bg-[var(--input-bg)] outline-none rounded-md placeholder:text-[var(--placeholder)]"
          />
          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center justify-center gap-1.5">
            <input type="checkbox" id="T&C" required={true} />
            <label
              htmlFor="T&C"
              className="text-sm text-[var(--text-secondary)]"
            >
              I agree to the{" "}
              <a
                href="#"
                className="cursor-pointer text-[var(--link)] underline"
              >
                Terms & Conditions
              </a>
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full h-10 mt-5 relative font-medium cursor-pointer bg-[var(--button)] rounded-md transition-all duration-500 hover:text-lg hover:bg-[var(--button-hover)]"
          >
            Create Account
            {/* Graphics */}
            <div className="h-2 w-2 absolute bottom-2.5 left-1/4 bg-[#c3c32d] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100"></div>
            <div className="h-1 w-1 absolute top-5 left-[40%] bg-[#3015aa] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100 group-hover:-translate-y-3 group-hover:-translate-x-5"></div>
            <div className="h-1.5 w-1.5 absolute top-1/2 left-1/2 bg-[#339e90] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100 group-hover:-translate-y-3.5 group-hover:-translate-x-8"></div>
            <div className="h-[7px] w-[7px] absolute top-2.5 left-[56%] bg-[#db5c36] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100"></div>
            <div className="h-1.5 w-1.5 absolute top-2 left-2/3 bg-[#762929] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100 group-hover:translate-y-5 group-hover:-translate-x-20"></div>
            <div className="h-2 w-2 absolute bottom-3 right-[30%] bg-[#00ffff] rounded-full scale-0 transition-transform duration-700 group-hover:scale-100"></div>
          </button>
        </form>
        {/* Subheading or Divider */}
        <div className="my-2.5 h-0.5 w-full relative bg-gray-500">
          <span className="px-2.5 text-sm text-[var(--text-secondary)] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[var(--container)]">
            Or Register with
          </span>
        </div>
        {/* Other Signin Options */}
        <div className="w-full flex items-center gap-2.5">
          <div className="w-1/2 py-1.5 font-light flex items-center justify-center gap-1.5 cursor-pointer border border-gray-300 rounded-md">
            <FcGoogle className="text-xl" />
            Google
          </div>
          <div className="w-1/2 py-1.5 font-light flex items-center justify-center gap-1.5 cursor-pointer border border-gray-300 rounded-md">
            <FaApple className=" text-xl" />
            Apple
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
