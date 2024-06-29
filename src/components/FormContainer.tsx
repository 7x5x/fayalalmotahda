"use client";
import { TiArrowUnsorted } from "react-icons/ti";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { CustomButton } from "./CustomButton";
import { FaPhone, FaUser } from "react-icons/fa";
import { banks, work } from "./data";
export const FormContainer = (props: any) => {
  return (
    <div id="form" className=" w-full lg:w-auto">
      <CustomInput
        onChange={props.onChange}
        value={props.value.fullName}
        name="fullName"
        placeholder="الاسم الكامل"
        icon={<FaUser size={18} />}
      />
      <CustomInput
        onChange={props.onChange}
        value={props.value.salary}
        name="salary"
        placeholder="الراتب "
        icon={<h1 className=" font-semibold">ريال</h1>}
      />
      <CustomInput
        onChange={props.onChange}
        value={props.value.phoneNumber}
        placeholder="رقم الهاتف"
        maxLength={10}
        name="phoneNumber"
        icon={<FaPhone size={18} />}
      />
      <CustomSelect
        onChange={props.onChange}
        value={props.value.bank}
        placeholder="البنك"
        name="bank"
        data={banks}
        icon={<TiArrowUnsorted size={18} />}
      />
      <CustomSelect
        onChange={props.onChange}
        value={props.value.work}
        placeholder="قطاع العمل"
        name="work"
        data={work}
        icon={<TiArrowUnsorted size={18} />}
      />
      <h1 className=" mt-4 text-sm  text-red-800">{props.errorMsg}</h1>
      <CustomButton onClick={props.onClick} />
    </div>
  );
};
