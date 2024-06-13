"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Son",
      url: "lates",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center ">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? " underline underline-offset-8  text-amber-600"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
          key={i}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
