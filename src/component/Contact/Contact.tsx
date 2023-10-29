import { GoMail } from "react-icons/go";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { BiMap, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const SetContact = (props: any) => {
  const { logo, deskripsi } = props;
  return (
    <div className="flex items-center my-1">
      <div className="bg-blue-800 text-white h-9 w-9 rounded-full justify-center items-center flex mr-3">
        {logo}
      </div>
      <p>{deskripsi}</p>
    </div>
  );
};

const SetSosmed = (props: any) => {
  const { sosmed } = props;
  return (
    <div className="bg-white text-blue-800 border border-blue-800 h-9 w-9 rounded-full justify-center items-center flex mr-3 hover:text-white hover:bg-blue-800">
      {sosmed}
    </div>
  );
};
const Contact = () => {
  return (
    <div className="m-2 sm:">
      <h1 className="text-3xl text-center font-bold text-blue-800 ">
        Cantact Us
      </h1>
      <p className="font-normal text-lg mt-2 mb-2">
        Have a question? We love helping others. Feel free to get in touch with
        us if you have any queries or suggestions.
      </p>
      <div className="">
        <SetContact logo={<GoMail />} deskripsi="farizmaulana603@gmail.com" />
        <SetContact logo={<BsTelephone />} deskripsi="0895 6789 1011" />
        <SetContact
          logo={<BiMap />}
          deskripsi="Cikarang Utara Kabupaten Bekasi, Jawa Barat"
        />
      </div>
      <div className="flex justify-center items-center mt-5">
        <SetSosmed sosmed={<BiLogoFacebook />} />
        <SetSosmed sosmed={<BsInstagram />} />
        <SetSosmed sosmed={<BiLogoLinkedin />} />
      </div>
    </div>
  );
};

export default Contact;
