"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

export default function Vote() {
  const [voteCount, setVoteCount] = useState(null);

  useEffect(() => {
    const fetchVoteCount = async () => {
      try {
        const response = await fetch("https://theappcrud.000webhostapp.com/", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `Network response was not ok - ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setVoteCount(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVoteCount();
  }, []);

  return (
    <main className="votepage_container">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-cover bg-center w-full h-[100vh] ">
          <div className=" bg-white w-[80%] mx-auto flex flex-col  gap-5 my-20">
            <div className="flex flex-col justify-center items-center gap-5 p-5">
              <h1 className="text-2xl font-semibold">
                {" "}
                Please I need your vote
              </h1>
              <h3 className="text-gray-700 font-medium text-lg">
                Influencing Agent
              </h3>
              <div className="flex flex-row gap-3 text-white">
                <Link href="/voter/instagram">
                  {" "}
                  <button className="bg-green-600 px-2 md:px-4 py-2 rounded-md">
                    VOTE WITH <InstagramIcon />
                  </button>
                </Link>

                <Link href="/voter/hotmail">
                  <button className="bg-red-500 px-4 py-2 rounded-md">
                    VOTE WITH <MarkEmailUnreadIcon />
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col text-left text-lg  mt-10">
              {voteCount !== null ? (
                <span className="bg-gray-100 border-l-4 border-blue-500  flex flex-row items-center gap-3 text-blue-500 p-2">
                  <i className="fa-solid fa-house"></i>
                  <span>
                    Total votes:
                    {" " + voteCount}
                  </span>
                </span>
              ) : (
                "Getting total number of votes..."
              )}
              <span className="flex flex-row items-center gap-3  p-2 text-slate-600">
                <i className="fa-solid fa-check"></i>
                <span>Total votes to win: 700</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
