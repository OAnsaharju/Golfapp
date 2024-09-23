import React from "react";

function Footer() {
  return (
    <div className="bg-[#4B5B4C] text-white p-4 py-4 w-full mt-auto">
      <div className="mx-auto bg-white h-[2px] w-[80%]"></div>
      <p className="flex justify-center items-center gap-2 mt-2 text-xs md:text-1xl">
        Golf App for Poikainpelit Made By :
        <a
          href="https://github.com/OAnsaharju"
          className="hover:underline font-semibold"
        >
          Github/OAnsaharju
        </a>
      </p>
    </div>
  );
}

export default Footer;
