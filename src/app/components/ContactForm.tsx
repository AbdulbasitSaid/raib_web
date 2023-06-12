"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Recaptcha from "../components/Recaptcha";
import { alertService } from "../services/alert.service";
import { Alert } from "./Alert";

export default function ContactForm() {
  const formId = "contact-form";
  const [isVerified, setIsVerified] = useState(false);
  const useForm = useRef(null);
  const [options, setOptions] = useState({
    autoClose: true,
    keepAfterRouteChange: false,
  });
  const handleRecaptchaChange = (value: string) => {
    setIsVerified(true);
    console.log("Captcha value:", value);
  };

  function handleOptionChange(e: any) {
    const { name, checked } = e.target;
    setOptions((options) => ({ ...options, [name]: checked }));
  }

  const sendEmail = async (captchaValue: any) => {
    captchaValue.preventDefault();
    alertService.info("Sending your message...", options);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        useForm.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          alertService.success(
            "Message sent successfully we will reply shortly!",
            options
          );
        },
        (error) => {
          console.log(error.text);
          alertService.error(error.text, options);
        }
      );
  };
  return (
    <>
      <form
        className="flex flex-col gap-4"
        id={formId}
        ref={useForm}
        onSubmit={sendEmail}
      >
        <input
          className="input input-bordered bg-transparent"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="input input-bordered bg-transparent"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="input input-bordered bg-transparent"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="textarea input-bordered bg-transparent textarea-lg "
          name="message"
          required
        />
        <br />
        <Recaptcha onChange={handleRecaptchaChange} />

        <input
          className="btn btn-primary bg-transparent text-primary rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:btn-primary hover:text-white hover:bg-primary"
          type="submit"
          value={"Let's Talk"}
          disabled={!isVerified}
        />
      </form>
      <Alert />
    </>
  );
}
