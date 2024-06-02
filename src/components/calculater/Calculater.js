import React, { useState } from "react";

const Calculater = () => {

  const [datainput,setDatainput] = useState("")

 const HandleValue = (e)=>{
    console.log(e.target.value)
    setDatainput(datainput.concat(e.target.value))
 }

 const Clickdata = ()=>{
  setDatainput(eval(datainput).toString())
 }

 const BackSpace = ()=>{
  setDatainput(datainput.slice(0,-1))
 }

 const AllClear = ()=>{
  setDatainput("")
 }

  return (
    <div className="bg-slate-400 min-h-screen w-full py-20">
      <div className="max-w-[300px] mx-auto container flex flex-col  bg-white min-h-auto">
        <div>
          <h1 className=" text-center font-bold mb-5">Calculater</h1>
          <div className="px-4">
            <div className="px-4">
              <input
                placeholder="0"
                className=" bg-yellow-500 w-full px-2 py-2"
                value={datainput}
              />
            </div>
            <div className=" flex flex-col gap-3 py-6 w-full">
              <div className="flex gap-3 justify-center">
                <button
                  className=" w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="("
                >
                  (
                </button>
                <button
                  className=" w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value=")"
                >
                  )
                </button>
                <button
                  className=" w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="%"
                >
                  %
                </button>
                <button
                  className=" w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={AllClear} value="AC"
                >
                  AC
                </button>
              </div>
              <div className="flex gap-3  justify-center">
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="7"
                >
                  7
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="8"
                >
                  8
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="9"
                >
                  9
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="*"
                >
                  *
                </button>
              </div>
              <div className="flex gap-3  justify-center">
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="4"
                >
                  4
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="5"
                >
                  5
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="6"
                >
                  6
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="-"
                >
                  -
                </button>
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="1"
                >
                  1
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="2"
                >
                  2
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="3"
                >
                  3
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="+"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3  justify-center">
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="0"
                >
                  0
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={BackSpace} 
                >
                  ba
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={Clickdata}
                >
                  =
                </button>
                <button
                  className="w-[50px] bg-blue-600 px-5 py-1 text-white"
                  onClick={HandleValue} value="/"
                >
                  /
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculater;
