import React, {useState} from "react";
import gambar from "../assets/logo.png";
function Loading() {
  let [load, setload] = useState(false)
  return (
    // <div className={'flex flex-col' + (load ? console.log('yes') : console.log('no'))} onLoad={load = true}>
    <div className={'flex flex-col ' + (load ? 'yes' : 'no')} >
      <img src={gambar} className="scale-75 sm:scale-100" />
      <div className="container sm:w-4/4 dip mt-[-1rem]  sm:mt-0 rounded-lg h-3 bg-white">
      <div className="sm:w-4/4 dip mt-[-1rem] coba sm:mt-0 rounded-lg h-3 bg-primary-agak-ungu"></div>
      </div>
      <button onClick={()=>setload = true}>tes</button>
      <p className="sm:text-2xl sm:mt-4 mt-2  text-sm  mb-4 drop-shadow-lg font-bold font-body ">Menyiapkan sprei..</p>
    </div>
  );
}

export default Loading;
