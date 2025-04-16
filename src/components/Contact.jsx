import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import BouncingArrow from "./miniComponents/BouncingArrow";
import CustomTypewriter from "./miniComponents/CustomeTypeWriter";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Loading state for submit button
  const [loading, setLoading] = useState(false);

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // Sending email to client
    emailjs.sendForm(
      'service_redvae6', 'template_3aqocr9', form.current, 'w2tM-SMRtrq9q-arm'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent Successfully 😎");
          console.log("Email sent successfully to client");
        },
        (error) => {
          console.log(error.text);
          // Error toast message
          toast.error(error.text);
          console.log("Error sending email to client");
        }
      );

    // Sending Email to me
    emailjs.sendForm(
      'service_redvae6', 'template_a9uoykg', form.current, 'w2tM-SMRtrq9q-arm'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          console.log("Email sent successfully to Developer 💪🏾😎");
        },
        (error) => {
          console.log(error.text);
          console.log("Error sending email to Developer 🥲😥");
        }
      );

  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          <CustomTypewriter
            words={[Contact.title]}
            speed={100}
            pause={1000}
            loop
            cursorChar='⚡'
          />
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="flex-1 flex flex-col gap-5"
        >
          {/* Input Name as same as email js templates values */}
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="border border-slate-600 p-3 rounded"
          />
          
          <input
            type="email"
            name="user_email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" // verify email format
            placeholder="Email"
            required
            className="border border-slate-600 p-3 rounded"
          />

          {/* Contact number input */}
          <input
            type="tel"
            name="user_contact"
            placeholder="Contact Number"
            pattern="^\+?[0-9]{7,15}$"
            title="Please enter a valid phone number (7–15 digits, optional + at start)"
            required
            className="border border-slate-600 p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            className="border border-slate-600 p-3 rounded h-44"
            required
          ></textarea>

          <button
            type="submit"
            className="btn self-start bg-white text-dark_primary flex items-center gap-2"
            disabled={loading} // optional: disables button during submit
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-dark_primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>

        </form>


        {/* Social Media Icons */}
        <div className="flex-1 flex flex-col gap-5 relative">
          {Contact.social_media.map((content, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay={i * 430}
              className="flex items-center gap-2"
            >
              <h4 className="text-white">{createElement(content.icon)}</h4>
              <a className="" href={content.link} target="_blank">
                {content.text}
              </a>
            </div>
          ))}

          {/* Bouncing Arrow Animation */}
          <BouncingArrow />

        </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;