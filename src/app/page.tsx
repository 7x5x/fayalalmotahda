"use client";
import { FormContainer } from "@/components/FormContainer";
import { Success } from "@/components/Success";
import Loading from "@/components/loading";
import Image from "next/image";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handelinput = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = async (e: any) => {
 console.log(formData);
    setLoading(true);

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data);
      setErrorMsg(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className=" bg-white text-[#141259]  relative min-h-screen">
      <section className=" relative  min-h-[40vh] p-8 bg-[#fafafc]   ">
        <Image
          src={"/bg.png"}
          className=" object-contain"
          alt=""
          fill
          sizes=""
        />
      </section>

      <section className="  absolute border shadow-md   top-[30vh] bg-white z-50 rounded-t-[2.5rem] w-full ">
        <div className="p-8  flex flex-col items-center ">
          <div className="  ">
            <h1 className=" text-[40px] text-center    leading-snug">
              قروض عقارية كاش
            </h1>
            <h1 className="  text-lg  text-center ">
              اعلى تمويل عقاري بأقل نسبة فائدة تصل إلى 2%
            </h1>
          </div>
          {errorMsg !== "Email sent successfully" ? (
            <FormContainer
              onClick={handelSubmit}
              onChange={handelinput}
              value={formData}
              errorMsg={errorMsg}
            />
          ) : (
            <Success />
          )}
        </div>
      </section>
      {loading && (
        <div className=" fixed   h-screen z-[999]    top-0 transform  bg-[#00000089] w-full  grid place-items-center">
          <Loading />
        </div>
      )}
    </main>
  );
}
