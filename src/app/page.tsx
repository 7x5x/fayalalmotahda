"use client";
import { FormContainer } from "@/components/FormContainer";
import { Success } from "@/components/Success";
import Loading from "@/components/loading";
import Image from "next/image";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [formData, setFormData] = useState({
    subject: "Message Received(alnaif)",
    pass: "ievl wwdr fiax umgx",
    from: "alnaif.contact@gmail.com",
  });
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
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ads-wave.com/api/sendmails", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data);
      setErrorMsg(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className=" text-white bg-white  relative min-h-screen">
      <div className=" absolute w-40 h-40 bg-[#4c40f7]  backdrop-brightness-90 bg-opacity-7 bottom-0 rounded-full blur-[90px]  " />
      <div className=" absolute w-40 h-40 bg-blue-600 bg-opacity-7 top-[30vh]  left-0 rounded-full blur-[90px]  " />

      <section className=" z-50 p-8   ">
        <div className=" h-28 w-28  relative m-auto">
          <Image
            src={"/logo.png"}
            className=" object-cover bg-gray-300"
            alt=""
            fill
            sizes=""
          />
        </div>
        <div className=" mt-4 w-full text-gray-400   gap-6  flex justify-center blur-0">
          <a href="mailto:athirwan2332@gmail.com">
            <MdEmail
              size={34}
              className="  cursor-pointer hover:scale-[1.05]"
            />
          </a>
          <a href="tel:0563385548">
            <FaPhone
              size={34}
              className="  cursor-pointer hover:scale-[1.05]"
            />
          </a>
        </div>
      </section>

      <section className=" z-50 p-8 flex flex-col items-center     bottom-0 t  backdrop-blur-xl     bg-black/50 rounded-t-[2.5rem] w-full ">
        <div className="  ">
          <h1 className=" text-5xl text-center    leading-tight"> عقار وكاش</h1>
          <h1 className=" text-[22px]  text-center ">
            لطالما كان هدفنا هو تسهيل امتلاك المنازل
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
      </section>
      {loading && (
        <div className="absolute  top-0 h-full  left-0 transform  bg-[#00000089] w-full  grid place-items-center">
          <Loading />
        </div>
      )}
    </main>
  );
}
