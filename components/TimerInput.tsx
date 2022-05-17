import React from "react"

interface inputProps {
  value : number,
  handleClick() : void,
  handleChange( e : any ) : void,
}

export const TimerInput = ({ value, handleClick, handleChange }: inputProps) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 z-6 md:flex-row md:space-y-0">
      <input
        className="w-40 px-2 py-1 mr-4 text-xl rounded-lg outline-none md:text-2xl font-redhat "
        name="Timer Input"
        type="number"
        placeholder="Enter No. of Days"
        value={value}
        onChange={handleChange}
        min={0}
      />
      <button onClick={handleClick} className="px-4 py-2 text-xl font-semibold transition duration-300 ease-in bg-rose-300 font-redhat md:text-xl rounded-xl text-rose-500 hover:bg-rose-500 hover:text-rose-100"> Set Value</button>
    </div>
  )
}
