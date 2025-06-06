import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🚗</span>
        <h1 className="text-xl font-bold">CarHub</h1>
      </div>
      
      <Link href={"/add-car"}>
      <button className="bg-black text-white text-xl px-4 py-2 rounded-full hover:bg-blue-600 transition">
        post car
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;
