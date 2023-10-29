import { FormEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_97g5pnp",
          "template_azp03jf",
          form.current,
          "QvywfUcPqS_CZy8OU"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            alert("email terkirim");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="justify-center items-center mx-2">
        <div className="mt-2">
          <input
            type="text"
            placeholder="Nama"
            name="nama_pengirim"
            className="input input-bordered input-group-md sm:input-lg sm:text-sm w-full max-w-xl"
            required
          />
        </div>
        <div className="mt-2">
          <input
            type="email"
            placeholder="Email"
            name="nama_email"
            className="input input-bordered input-group-md sm:input-lg sm:text-sm w-full max-w-xl"
            required
          />
        </div>
        <div className="mt-2 ">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="input input-bordered input-group-md sm:input-lg sm:text-sm w-full max-w-xl"
            required
          />
        </div>
        <div className="mt-2 ">
          <textarea
            name="message"
            placeholder="Massage"
            className="textarea textarea-bordered textarea-md w-full max-w-xl"
            required
          />
        </div>
        <div className="mt-3 mb-7 flex justify-center items-center">
          <input
            className="btn bg-blue-800 py-3 px-12 text-white rounded-lg hover:bg-blue-900"
            type="submit"
            value="Send"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
