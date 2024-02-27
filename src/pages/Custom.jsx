import React from "react";
import gambar from "../assets/logo.png";
import sm from "../assets/Group4.png";
import m from "../assets/Group5.png";
import l from "../assets/Group6.png";
import xl from "../assets/Group7.png";
import base from "../assets/base.jpg";
import alpsSeries from '../assets/crocus.png'
import snowdrop from '../assets/snowdrop.png'
import bedcoverCrocus from '../assets/bedcoverCrocus.png'
import spreiCrocus from '../assets/spreiCrocus.png'
import gulingCrocus from '../assets/gulingCrocus.png'
import bantalCrocus from '../assets/bantalCrocus.png'
import bedcoverPutih from '../assets/bedcoverPutih.png'
function Custom() {
  return (
    <div className="p-12">
      <div className="p-8 md:p-20 bg-primary-text gap-10 w-[100%] flex flex-col-reverse lg:flex lg:flex-row lg:justify-between h-auto md:h-auto">
        <div className="absolute opacity-0 md:absolute md:ml-[-2rem] md:mt-[-4rem] logo">
          <div className="md:flex md:items-center md:gap-2">
            <img src={gambar} className="w-2/12" alt="logo sante" />
            <p className="text-primary-agak-ungu mt-[-.5rem] font-heading text-3xl font-black">
              Custom bedding Sante
            </p>
          </div>
        </div>
        <div className="custom w-auto md:w-2/4 h-auto">
          <div className="duvet">
            <div className="duvet-btn md:py-4 md:px-8 py-2 px-4 md:bg-primary bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black">Duvet</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-10 md:h-10 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="sprei md:12 my-4">
            <div className="sprei-btn md:py-4 md:px-8 py-2 px-4 bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black">Sprei</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-10 md:h-10 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="bantal">
            <div className="bantal-btn md:py-4 md:px-8 py-2 px-4 bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black">Bantal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:w-10 md:h-10 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          {/* <div className="sprei md:my-12 my-4">
            <div className="sprei-btn py-4 px-8 bg-primary flex justify-between">
              <p className="text-2xl font-body font-black">Sprei</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="bantal">
            <div className="bantal-btn py-4 px-8 bg-primary flex justify-between">
              <p className="text-2xl font-body font-black">Bantal</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div> */}
          <div className="size">
            <div className="md:py-8 py-4  flex  justify-between">
              <p className="md:text-2xl text-md drop-shadow-2xl text-primary font-body font-black">
                Sesuaikan Ukuran:
              </p>
            </div>
            <div className="sizes flex flex-wrap sm:flex-nowrap gap-4 justify-between">
              <div className="sizes-card  text-center">
                <img
                  src={sm}
                  className=" md:opacity-100 md:relative absolute opacity-0"
                />
                <p className=" text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                  Single
                </p>
                <p className="text-primary-agak-ungu font-bold font-body">
                  120x200
                </p>
              </div>
              <div className="sizes-card text-center">
                <img
                  src={m}
                  className="md:opacity-100 md:relative absolute opacity-0"
                />
                <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                  Full
                </p>
                <p className="text-primary-agak-ungu font-bold font-body">
                  160x200
                </p>
              </div>
              <div className="sizes-card text-center">
                <img
                  src={l}
                  className="md:opacity-100 md:relative absolute opacity-0"
                />
                <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                  Queen size
                </p>
                <p className="text-primary-agak-ungu font-bold font-body">
                  180x200
                </p>
              </div>
              <div className="sizes-card text-center">
                <img
                  src={xl}
                  className="md:opacity-100 md:relative absolute opacity-0"
                />
                <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                  King size
                </p>
                <p className="text-primary-agak-ungu font-bold font-body ">
                  200x200
                </p>
              </div>
            </div>
          </div>
          <button className="text-primary-text text-xs sm:text-sm md:text-2xl font-bold font-body mt-12 py-4 px-12 bg-primary">
            belanja sekarang!
          </button>
        </div>
        <div  className="out-preview w-auto h-[30rem] relative bg-primary sm:w-auto sm:h-[30rem] md:h-[40rem]  md:w-auto lg:w-2/4 lg:h-[40rem]">
          <img src={bedcoverCrocus} className="w-full  z-20 object-cover absolute h-full "/>        
          <img src={spreiCrocus} className="w-full  z-20 object-cover absolute h-full "/>        
          <img src={bedcoverPutih} className="w-full  z-20 object-cover absolute h-full "/>        
          <img src={bantalCrocus} className="w-full  z-20 object-cover absolute h-full "/>        
          <img src={gulingCrocus} className="w-full  z-20 object-cover absolute h-full "/>        
          <img src={alpsSeries} className="w-full  z-10 object-cover absolute h-full "/>        
          <img src={base} className="w-full object-cover absolute h-full "/>        
        </div>
      </div>
    </div>
  );
}

export default Custom;
