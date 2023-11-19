"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "../voter/login/loading";

const Login = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/server/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Successful") {
          router.push("/voter/view");
          //   console.log("successful");
        } else {
          setErrorMessage("Incorrect password. Please try again.");
        }
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="form-container flex flex-col gap-5 justify-center items-center min-h-screen w-full text-4xl lg:text-lg">
          <h1 className="text-2xl font-bold">Login to access</h1>

          <form
            method="POST"
            onSubmit={handleLogin}
            className="flex flex-col gap-5"
          >
            {errorMessage && <span> {errorMessage} </span>}
            <div className="flex flex-col ">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="text-xl"
                placeholder="Enter passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{}}
                required
              />
            </div>

            <input
              type="submit"
              value="Login"
              name="login"
              className="w-full bg-blue-600 text-white text-lg h-12 cursor-pointer"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
