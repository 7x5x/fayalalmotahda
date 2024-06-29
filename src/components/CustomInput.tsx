"use client";
import { useState } from "react";

export const CustomInput = (props: any) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative  w-full mx-auto mt-8 shadow-[0px_0px_70px_-64px_rgba(66,68,90,1)] md:mt-10    ">
      <div
        className={`absolute left-0 top-[50%] translate-y-[-50%]  duration-[0.5s] ease-in-out text-[#f14c27]   ml-4 ${
          isFocused && " text-[#141259]"
        }`}
      >
        {props.icon}
      </div>
      <input
        {...props}
        className=" w-full  rounded-none bg-white border-b-2 border-[rgba(244,244,244,0.801191)] text-[#111029] transition-all duration-450 ease-in-out py-3.5 px-6 pl-12 text-[16px] focus:outline-none  focus:border-[#4c40f7] rtl:text-right"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
