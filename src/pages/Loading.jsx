import React from "react";
import gambar from "../assets/logo.png";
function Loading() {
  return (
    <div className="flex flex-col min-h-screen place-items-center justify-center">
      <img src={gambar} className="scale-50 md:scale-75" />
      <div className="container w-2/4 mt-[-2rem] md:w-4/12 dip  rounded-lg h-3 bg-white">
        <div className="sm:w-4/4 dip  coba rounded-lg h-3 bg-primary-agak-ungu"></div>
      </div>
      <p className="sm:text-2xl sm:mt-4 mt-2  text-sm  mb-4 drop-shadow-lg font-bold font-body ">
        Menyiapkan sprei..
      </p>
    </div>
  );
}

export default Loading;
