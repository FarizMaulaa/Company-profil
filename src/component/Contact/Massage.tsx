const MassageSet = (props: any) => {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered input-group-md sm:input-lg sm:text-sm w-full max-w-xs`}
    />
  );
};

const Massage = () => {
  return (
    <div className=" px-6 mt-4">
      <div className="justify-center items-center">
        <div className="m-2">
          <MassageSet type="text" placeholder="Name" />
        </div>
        <div className="m-2">
          <MassageSet type="email" placeholder="Email Addres" />
        </div>
        <div className="m-2">
          <MassageSet type="number" placeholder="Phone Number" />
        </div>
        <div className="m-2 ">
          <MassageSet className="" type="text" placeholder="Massage" />
        </div>
        <div className="flex justify-center items-center mt-3 mb-5">
          <button className="btn bg-blue-800 py-2 px-8 text-white rounded-lg hover:bg-blue-900">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Massage;
