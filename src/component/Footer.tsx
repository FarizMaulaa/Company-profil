const Footer = () => {
  return (
    <div className="text-center bg-blue-800 p-5 text-white">
      {/* Copyright&copy; 2023 <span className="font-bold">FarizMaulana</span> */}
      &copy; {new Date().getFullYear()}
      <span className="font-bold"> FarizMaulana</span>
    </div>
  );
};

export default Footer;
