const SetAbout = (props: any) => {
  const { logo, deskripsi } = props;
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-85 h-40 rounded border border-white my-2 mx-2 hover:bg-white hover:text-blue-800  hover:mb-5">
          <div className="justify-center items-center flex pt-4 text-4xl hover:font-bold">
            {logo}
          </div>
          <p className="text-center p-2 font-semibold hover:font-bold ">
            {deskripsi}
          </p>
        </div>
      </div>
    </>
  );
};
export default SetAbout;
