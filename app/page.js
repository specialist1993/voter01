import Image from "next/image";
import Eye from "../public/wired-outline-69-eye.gif";
import Chat from "../public/wired-lineal-981-consultation.gif";
import Music from "../public/wired-outline-43-music-note.gif";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Facebook from "../public/facebook.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 items-center min-h-[70vh] text-center my-36">
      <h1 className="font-black text-4xl  lg:text-6xl text-blue-950 z-10">
        <span className="relative green-border">Start</span>,{" "}
        <span className="relative green-border">raise</span> and{" "}
        <span className="relative green-border">grow</span> <br />
        faster with Our Voting System.
      </h1>

      <p className="text-md lg:text-xl font-bold text-blue-950">
        The legals for growing your company, <b>Sorted.</b>
      </p>

      <Link
        href="/voter/vote"
        className="bg-indigo-500 p-3 w-5/12 lg:w-1/12 rounded-full text-white text-xl font-semibold hover:drop-shadow-2xl"
      >
        Vote
      </Link>

      <div className="hidden lg:block absolute  -top-10 left-0 -z-10">
        <Image src={Chat} width={100} height={100} alt="Eye" />
      </div>

      <div className="hidden lg:blockabsolute top-44 right-80">
        <Image src={Eye} width={100} height={100} alt="Chat" />
      </div>

      <div className="hidden lg:blockabsolute top-96 left-96">
        <Image src={Music} width={100} height={10} alt="Music" />
      </div>

      <div className="absolute -bottom-36 flex flex-row w-4/12 lg:w-2/12 justify-between items-center">
        <Image src={Instagram} width={50} height={10} alt="Instagram" />

        <Image src={Twitter} width={50} height={10} alt="Twitter" />
        <Image src={Facebook} width={50} height={10} alt="Facebook" />
      </div>
    </main>
  );
}
