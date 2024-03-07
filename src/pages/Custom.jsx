import React, { useState, Suspense, useEffect } from "react";
import Swal from "sweetalert2";
import gambar from "../assets/logo.png";
import sm from "../assets/Group4.png";
import m from "../assets/Group5.png";
import l from "../assets/Group6.png";
import xl from "../assets/Group7.png";
import base from "../assets/base.jpg";
import alpsSeries from "../assets/crocus.png";
import daffodil from "../assets/daffodil.png";
import snowdrop from "../assets/snowdrop.png";
import bedcoverCrocus from "../assets/bedcoverCrocus.png";
import bedcoverDaffodil from "../assets/bedcoverDaffodil.png";
import bedcoverSnowdrop from "../assets/bedcoverSnowdrop.png";
import spreiCrocus from "../assets/spreiCrocus.png";
import spreiSnowdrop from "../assets/spreiSnowdrop.png";
import spreiDaffodil from "../assets/spreiDaffodil.png";
import gulingCrocus from "../assets/gulingCrocus.png";
import gulingDaffodil from "../assets/gulingDaffodil.png";
import gulingSnowdrop from "../assets/gulingSnowdrop.png";
import bantalCrocus from "../assets/bantalCrocus.png";
import bantalDaffodil from "../assets/bantalDaffodil.png";
import bantalSnowdrop from "../assets/bantalSnowdrop.png";
import bedcoverPutih from "../assets/bedcoverPutih.png";
import spreiPutih from "../assets/spreiPutih.png";

function Custom() {
  let [bedcover, setBedcover] = useState(bedcoverCrocus);
  let [gantiSprei, setGantiSprei] = useState(spreiPutih);
  let [gantiBantal, setGantiBantal] = useState(bantalCrocus);
  let [gantiGuling, setGantiGuling] = useState(gulingCrocus);
  let [bedcoverSet, setBedcoverSet] = useState("");
  let [duvetSet, setDuvetSet] = useState(true);
  let [duvet, setDuvet] = useState(true);
  let [sprei, setSprei] = useState(true);
  let [bantal, setBantal] = useState(true);
  //  TODO: perbaiki yang vite + react, perbaiki tampilan hp sedikit, sisanya tunggu revisian pak prasetyo
  let [pesanSprei, setPesanSprei] = useState("Sprei Putih");
  let [pesanBedcover, setPesanBedcover] = useState("Crocus");
  let [pesanDuvet, setPesanDuvet] = useState("Bedcover Crocus");
  let [tinggi, setTinggi] = useState("30");
  let [set, setIsset] = useState(false);
  let [pesanBantal, setPesanBantal] = useState("Bantal dan Guling Crocus");
  let [ukuran, setUkuran] = useState("");
  const showSwal = () => {
    Swal.fire({
      title: "anda belum memilih ukuran!!",
    });
  };
  return (
    <div className="md:p-12 lg:p-12 sm:p-12 p-0">
      <div className="p-8 md:p-20 bg-primary-text gap-10 w-[100%] flex flex-col-reverse lg:flex lg:flex-row lg:justify-between h-auto md:h-auto">
        <div className="absolute hidden lg:block md:absolute md:ml-[-2rem] md:mt-[-4rem] logo">
          <div className="md:flex md:items-center md:gap-2">
            <img src={gambar} className="w-2/12" alt="logo sante" />
            <p className="text-primary-agak-ungu mt-[-.5rem] font-heading text-3xl font-black">
              Custom bedding Sante
            </p>
          </div>
        </div>
        <div className="custom w-auto  md:w-4/4  lg:w-2/4 ">
          <div>
            <p className="text-primary mt-[-1.4rem] md:mt-0 font-heading text-xs md:text-base mb-2 md:mb-0">
              Jelajahi koleksi Sante dan pilihlah yang paling Anda sukai untuk
              kamar tidur yang nyaman bersama keluarga.
            </p>
          </div>
          <div
            className={`duvetset mb-7 md:my-4  lg:my-4 ${
              duvetSet == false ? `h-[15rem]` : ``
            }`}
          >
            <div className="duvetset-btn md:py-4 md:px-8 py-2 px-4 md:bg-primary bg-primary flex justify-between">
              <p className="md:text-2xl text-md text-primary-text font-body font-black">
                Bedcover/Quiltcover
              </p>
              <a
                onClick={() => {
                  if (duvetSet) {
                    setDuvetSet(false);
                  } else {
                    setDuvetSet(true);
                  }
                }}
                className="cursor-pointer"
              >
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
              </a>
            </div>
            <div
              className={`duvetset-menu text-primary-text bg-primary-agak-putih ${
                duvetSet == false ? "h-[11rem] opacity-100" : `hidden`
              }  `}
            >
              <div className="p-4 flex gap-4 text-center text-black font-body font-semibold ">
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black  sm:w-20 crocus w-20 h-20 crocus rounded-md"
                    onClick={() => {
                      setPesanDuvet("crocus");
                      setBedcover(alpsSeries);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">crocus</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black sm:w-20 rounded-md crocus w-20 h-20 daffodil"
                    onClick={() => {
                      setPesanDuvet("daffodil");
                      setBedcover(daffodil);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">daffodil</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black sm:w-20 rounded-md  snowdrop w-20 h-20 snowdrop"
                    onClick={() => {
                      setPesanDuvet("snowdrop");

                      setBedcover(snowdrop);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">snowdrop</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`duvet md:my-4 lg:my-4 ${
              duvet == false ? `h-[15rem]` : ``
            }`}
          >
            <div className="duvet-btn md:py-4 md:px-8 py-2 px-4 md:bg-primary bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black text-primary-text">Bedcover</p>
              <a
                onClick={() => {
                  if (duvet) {
                    setDuvet(false);
                  } else {
                    setDuvet(true);
                  }
                }}
                className="cursor-pointer"
              >
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
              </a>
            </div>
            <div
              className={`duvet-menu text-primary-text bg-primary-agak-putih ${
                duvet == false ? "h-[11rem] opacity-100" : `hidden`
              }  `}
            >
              <div className="p-4 flex gap-4 text-center text-black font-body font-semibold ">
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black  sm:w-20 crocus w-20 h-20 crocus rounded-md"
                    onClick={() => {
                      setPesanDuvet("bedcover crocus");
                      setBedcover(bedcoverCrocus);
                     setBedcoverSet('')
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">crocus</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black sm:w-20 rounded-md crocus w-20 h-20 daffodil"
                    onClick={() => {
                      setPesanDuvet("bedcover daffodil");
                     setBedcoverSet('')
                     setBedcover(bedcoverDaffodil);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">daffodil</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black sm:w-20 rounded-md  snowdrop w-20 h-20 snowdrop"
                    onClick={() => {
                      setPesanDuvet("bedcover snowdrop");
                      setBedcoverSet('')

                      setBedcover(bedcoverSnowdrop);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">snowdrop</p>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className={`sprei  md:my-4 lg:my-4  ${
              sprei == false ? `h-[19rem]` : ``
            }`}
          >
            <div className="sprei-btn md:py-4 md:px-8 py-2 px-4 md:bg-primary bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black text-primary-text">
                Sprei
              </p>
              <a
                className="cursor-pointer"
                onClick={() => {
                  if (sprei) {
                    setSprei(false);
                  } else {
                    setSprei(true);
                  }
                }}
              >
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
              </a>
            </div>
            <div
              className={`sprei-menu text-primary-text bg-primary-agak-putih ${
                sprei == false ? "h-[15rem] opacity-100" : `hidden`
              }  `}
            >
              <div className="p-4 flex gap-4 text-center flex-wrap text-black font-body font-semibold ">
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 w-20 h-20 putih"
                    onClick={() => {
                      setBedcoverSet("");
                      setPesanSprei("sprei putih");
                      setGantiSprei(spreiPutih);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">putih</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20 crocus"
                    onClick={() => {
                      setPesanSprei("sprei crocus");
                      setBedcoverSet("");

                      setGantiSprei(spreiCrocus);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">crocus</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20 daffodil"
                    onClick={() => {
                      setBedcoverSet("");
                      setPesanSprei("sprei daffodil");

                      setGantiSprei(spreiDaffodil);
                    }}
                  ></div>
                  <p className="text-xs cursor-pointer sm:text-xl">daffodil</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20 snowdrop"
                    onClick={() => {
                      setBedcoverSet("");
                      setPesanSprei("sprei snowdrop");
                      setGantiSprei(spreiSnowdrop);
                    }}
                  ></div>
                  <p className="text-xs sm:text-lg">snowdrop</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`bantal ${bantal == false ? `h-[15rem]` : ``}`}>
            <div className="bantal-btn md:py-4 md:px-8 py-2 px-4 md:bg-primary bg-primary flex justify-between">
              <p className="md:text-2xl text-md font-body font-black text-primary-text">
                Bantal
              </p>
              <a
                className="cursor-pointer"
                onClick={() => {
                  if (bantal) {
                    setBantal(false);
                  } else {
                    setBantal(true);
                  }
                }}
              >
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
              </a>
            </div>
            <div
              className={`bantal-menu text-primary-text bg-primary-agak-putih ${
                bantal == false ? "h-[11rem] opacity-100" : `hidden`
              }  `}
            >
              <div className="p-4 flex sm:justify-normal gap-4 text-center text-black font-body font-semibold ">
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20"
                    onClick={() => {
                      setPesanBantal("Bantal dan Guling Crocus");
                      setGantiGuling(gulingCrocus);
                      setBedcoverSet("");
                      setGantiBantal(bantalCrocus);
                    }}
                  ></div>
                  <p className="text-xs sm:text-xl">crocus</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20 daffodil"
                    onClick={() => {
                      setPesanBantal("Bantal dan Guling Daffodil");
                      setBedcoverSet("");

                      setGantiGuling(gulingDaffodil);
                      setGantiBantal(bantalDaffodil);
                    }}
                  ></div>
                  <p className="text-xs sm:text-xl">daffodil</p>
                </div>
                <div className="choices">
                  <div
                    className="sm:h-20 cursor-pointer border-2 border-black rounded-md sm:w-20 crocus w-20 h-20 snowdrop"
                    onClick={() => {
                      setPesanBantal("Bantal dan Guling Snowdrop");
                      setBedcoverSet("");

                      setGantiGuling(gulingSnowdrop);
                      setGantiBantal(bantalSnowdrop);
                    }}
                  ></div>
                  <p className="text-xs sm:text-xl">snowdrop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="size">
            {/* ukuran */}
            <div className="md:py-8 py-4  flex  justify-between">
              <p className="md:text-2xl text-md drop-shadow-2xl text-primary font-body font-black">
                Sesuaikan Ukuran:
              </p>
            </div>
            <div className="sizes flex flex-wrap sm:flex-nowrap gap-4 justify-between">
              <div className="sizes-card  text-center">
                <button className="focus:ring focus:ring-violet-400">
                  <img
                    onClick={() => {
                      setUkuran("ukuran 120x200");
                      setIsset(true);
                    }}
                    src={sm}
                    className=" md:opacity-100 md:relative absolute opacity-0"
                  />
                  <p className=" text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                    Single
                  </p>
                  <p className="text-primary-agak-ungu font-bold font-body">
                    120x200
                  </p>
                </button>
              </div>
              <div className="sizes-card text-center">
                <button className="focus:ring focus:ring-violet-400">
                  <img
                    onClick={() => {
                      setBedcoverSet("");
                      setUkuran("ukuran 160x200");

                      setIsset(true);
                    }}
                    src={m}
                    className="md:opacity-100 md:relative absolute opacity-0"
                  />
                  <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                    Full
                  </p>
                  <p className="text-primary-agak-ungu font-bold font-body">
                    160x200
                  </p>
                </button>
              </div>
              <div className="sizes-card text-center">
                <button className="focus:ring focus:ring-violet-400">
                  <img
                    onClick={() => {
                      setUkuran("ukuran 180x200");
                      setBedcoverSet("");

                      setIsset(true);
                    }}
                    src={l}
                    className="md:opacity-100 md:relative absolute opacity-0"
                  />
                  <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                    Queen size
                  </p>
                  <p className="text-primary-agak-ungu font-bold font-body">
                    180x200
                  </p>
                </button>
              </div>
              <div className="sizes-card text-center">
                <button className="focus:ring focus:ring-violet-400">
                  <img
                    onClick={() => {
                      setUkuran("ukuran 200x200");
                      setBedcoverSet("");

                      setIsset(true);
                    }}
                    src={xl}
                    className="md:opacity-100 md:relative absolute opacity-0"
                  />
                  <p className="text-primary-text font-bold font-body bg-primary p-2 rounded-md block md:hidden">
                    King size
                  </p>
                  <p className="text-primary-agak-ungu font-bold font-body ">
                    200x200
                  </p>
                </button>
              </div>
            </div>
            {/* tinggi */}
            <div className="md:py-8 py-4  flex  justify-between">
              <p className="md:text-2xl text-md drop-shadow-2xl text-primary font-body font-black">
                Sesuaikan Tinggi:
              </p>
            </div>
            <div className="sizes flex flex-wrap sm:flex-nowrap gap-4 ">
              <div className="sizes-card  text-center">
                <button
                  onClick={() => {
                    setTinggi("30");
                    setIsset(true);
                  }}
                  className="focus:ring focus:ring-violet-400"
                >
                  <p className=" text-primary-text font-bold font-body bg-primary p-2 rounded-md block">
                    30 cm
                  </p>
                </button>
              </div>
              <div className="sizes-card  text-center">
                <button
                  onClick={() => {
                    setTinggi("40");
                    setIsset(true);
                  }}
                  className="focus:ring focus:ring-violet-400"
                >
                  <p className=" text-primary-text font-bold font-body bg-primary p-2 rounded-md block">
                    40 cm
                  </p>
                </button>
              </div>
              
            </div>
          </div>

          <a
            className="font-body font-black"
            href={
              set == false
                ? "#"
                : // `https://api.whatsapp.com/send/?phone=6287777600070&text=Halo+Admin+Elsa%2C%0A%0AApakah+ketersediaan+barang+berikut+masih+ada%3F%0A%0A-+Bantal+dan+Guling+${pesanBantal}%0A-+Bedcover+${pesanDuvet}%0A-+Sprei+${pesanSprei}%0A%0ADengan+ukuran+${ukuran}.&type=phone_number&app_absent=0`
                  // `https://api.whatsapp.com/send/?phone=6287777600070&text=Halo+Admin+Elsa%2C%0A%0AApakah+ketersediaan+barang+berikut+masih+ada%3F%0A%0A-+${pesanBantal}%0A-+Bedcover ${pesanDuvet}%0A-+${pesanSprei}%0A-+Dengan ${ukuran}.%0A%0AApakah+bisa+diberikan+info+harganya%3F&type=phone_number&app_absent=0`
                  `https://api.whatsapp.com/send/?phone=6287777600070&text=Halo+Admin+Elsa%2C%0A%0AApakah+ketersediaan+barang+berikut+masih+ada%3F%0A%0A-+${pesanBantal}%0A-+Bedcover+${pesanDuvet}%0A-+${pesanSprei}%0A-+Dengan+ukuran+${ukuran}+tinggi+${tinggi}.%0A%0AApakah+bisa+diberikan+info+harganya%3F&type=phone_number&app_absent=0                  `
                }
            target={set == false ? "" : "_blank"}
          >
            <button
              onClick={set == false ? showSwal : ""}
              className="text-primary-text text-xs sm:text-sm md:text-2xl font-bold font-body mt-12 py-4 px-12 bg-primary"
            >
              belanja sekarang!
            </button>
          </a>
        </div>

        <div className="out-preview w-auto h-[15rem] relative bg-primary sm:w-auto sm:h-[30rem] md:h-[40rem]  md:w-auto lg:w-2/4 lg:h-[40rem]">
          {bedcoverSet != "" ? (
            <img
              src={bedcoverSet}
              className="w-full  z-40 object-cover absolute h-full "
            />
          ) : (
            ""
          )}
          <img
            src={bedcover}
            className={`w-full  z-20 ${
              bedcoverSet != "" ? "" : "z-50"
            } object-cover absolute h-full `}
          />
          <img
            src={gantiSprei}
            className={`w-full  z-20 ${
              bedcoverSet != "" ? "" : "z-50"
            } object-cover absolute h-full `}
          />
          <img
            src={bedcoverPutih}
            className={`w-full  z-20 ${
              bedcoverSet != "" ? "" : "z-50"
            } object-cover absolute h-full `}
          />
          <img
            src={gantiBantal}
            className={`w-full  z-20 ${
              bedcoverSet != "" ? "" : "z-50"
            } object-cover absolute h-full `}
          />
          <img
            src={gantiGuling}
            className={`w-full  z-20 ${
              bedcoverSet != "" ? "" : "z-50"
            } object-cover absolute h-full `}
          />
          <img
            src={alpsSeries}
            className="w-full  z-10 object-cover absolute h-full "
          />
          <img src={base} className="w-full object-cover absolute h-full " />
        </div>
      </div>
    </div>
  );
}
export default Custom;
