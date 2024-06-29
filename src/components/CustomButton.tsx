export const CustomButton = (props: any) => {
  return (
    <div className=" lg:mt-8  mt-16  w-full overflow-hidden  m-auto  flex flex-wrap items-end justify-end gap-4 sm:justify-start xl:justify-between ">
      <button
        {...props}
        className=" mb-6  p-6  bg-[#141259]  text-white w-[100%] lg:w-[50%] rounded-xl"
      >
        ارسال
      </button>
      <a href="/PrivacyPolicy" className=" text-[#f14c27] text-sm ">
        بضغطك علي ارسال فانت توافق علي سياسة الخصوصية Privacy Policy
      </a>
    </div>
  );
};
