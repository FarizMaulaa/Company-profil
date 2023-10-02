import { BsShieldFillCheck, BsFire } from "react-icons/bs";
import { RiSecurePaymentFill, RiPriceTag2Fill } from "react-icons/ri";
import { GiChemicalBolt } from "react-icons/gi";
import { TbCirclesRelation } from "react-icons/tb";
import SetAbout from "./SetAbout";
const About = () => {
  return (
    <div>
      <div className="text-center bg-slate-300 -mt-2 p-3">
        <h1 className="text-2xl font-bold text-blue-800 mt-3">
          PT EXPORT IMPORT ARANG
        </h1>
        <p className="mt-2 text-slate-800">
          We are one the experienced Charcoal suppliers, Charcoal manufacturers,
          and exporters based in Indonesia. We are Good Quality, Trusted, and
          Friendly.
        </p>
        <button className="btn bg-blue-800 px-4 py-3 rounded-lg text-white mb-4 mt-3 hover:bg-blue-900">
          See Our Product
        </button>
      </div>
      <div className="bg-blue-800  text-white">
        <h1 className="text-3xl font-bold  text-center py-4">
          Why You Choose Us
        </h1>
        <div className="flex justify-center items-center">
          <div className="block sm:grid sm:grid-cols-3 sm:gap-1 sm:mb-3 sm:mx-2">
            <div>
              <SetAbout
                logo={<BsShieldFillCheck />}
                deskripsi="100% Reliable Service Guaranteed with Tailored and Adjustable
  Orders for Small or Big Buyers."
              />
            </div>
            <div>
              <SetAbout
                logo={<BsFire />}
                deskripsi="Customaized Charcoal Production, Lump Cut Sizes & Packing Options to Macth Your Needs"
              />
            </div>
            <div>
              <SetAbout
                logo={<RiSecurePaymentFill />}
                deskripsi="Flexible & Easy Payment Options with Low Minimum Order & Volume Discount Available."
              />
            </div>
            <div>
              <SetAbout
                logo={<GiChemicalBolt />}
                deskripsi="100% Natural Products with no Chemical Added. High-Quality Charcoal Graded by Weight, Size & Shape."
              ></SetAbout>
            </div>
            <div>
              <SetAbout
                logo={<TbCirclesRelation />}
                deskripsi="100% Natural Products with no Chemical Added. High-Quality Charcoal Graded by Weight, Size & Shape."
              ></SetAbout>
            </div>
            <div>
              <SetAbout
                logo={<RiPriceTag2Fill />}
                deskripsi="Experienced in Strictly Controlled Manufacturing & Exports to Potential Buyers at Compotitive Prices."
              ></SetAbout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
