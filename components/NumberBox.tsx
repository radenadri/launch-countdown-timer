import React from "react"

interface numProp {
  num: string | number,
  unit: string,
  flip: boolean
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center px-2 mt-4">
      <div className="relative flex flex-col items-center justify-center w-32 h-32 mt-4 text-2xl bg-transparent rounded-lg md:text-4xl">
        <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>

        <div className="absolute z-10 text-5xl font-bold text-rose-500 font-redhat md:text-7xl ">
          {num}
        </div>

        <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>

        <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${flip ? 'animate-flip bg-rose-200' : 'bg-transparent'}`}></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]" ></div>
      </div>
      <p className="mt-3 text-lg font-semibold text-rose-200 md:text-2xl ">
        {unit}
      </p>
    </div>
  )
}