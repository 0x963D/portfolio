import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:danvdoca@gmail.com?subject=${formData.subject}&body=Hello Dan,%0A%0A${formData.message}%0A%0ABest regards,%0A${formData.name}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          Let&apos;s create something amazing.{" "}
          <span className="decoration-darkGold/50 underline">
            Get in touch!
          </span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-darkGold h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+40757171030</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGold h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              danvdoca@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-darkGold h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              Bucharest, Romania
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
            />{" "}
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput "
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-lightGold py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
