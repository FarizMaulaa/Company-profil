import Contact from "./Contact";
import ContactUs from "./ContactUs";

const IndexContact = () => {
  return (
    <div className="sm:mx-10">
      <div className="sm:grid sm:grid-cols-2 sm:gap-72">
        <div>
          <Contact />
        </div>
        <div className="items-center">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default IndexContact;
