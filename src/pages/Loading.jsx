import React, { useState } from "react";
import gambar from "../assets/logo.png";
function Loading() {
  return (
    <div className={"flex flex-col"}>
      <img src={gambar} className="scale-75 sm:scale-100" />
      <div className="container sm:w-4/4 dip mt-[-1rem]  sm:mt-0 rounded-lg h-3 bg-white">
        <div className="sm:w-4/4 dip  coba sm:mt-0 rounded-lg h-3 bg-primary-agak-ungu"></div>
      </div>
      <p className="sm:text-2xl sm:mt-4 mt-2  text-sm  mb-4 drop-shadow-lg font-bold font-body ">
        Menyiapkan sprei..
      </p>
    </div>
  );
}

export default Loading;
