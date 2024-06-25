export const CustomButton = (props: any) => {
  return (
    <div className=" lg:mt-8 mt-4  w-full overflow-hidden  m-auto  flex flex-wrap items-end justify-end gap-4 sm:justify-start xl:justify-between ">
      <a href="/PrivacyPolicy" className=" text-[blue] text-sm ">
        بضغطك علي ارسال فانت توافق علي السياسة والخصوصية Privacy Policy
      </a>
      <button
        {...props}
        className=" mt-6  p-6  bg-[#4c40f7] w-[100%] lg:w-[50%] rounded-xl"
      >
        ارسال
      </button>
    </div>
  );
};
