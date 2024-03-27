import React from "react";
import { SiBlogger } from "react-icons/si";

function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center">
      <SiBlogger style={{ width: width, height: "auto" }} />
      <span className="text-lg font-bold ml-2">Blogs</span>
    </div>
  );
}

export default Logo;
