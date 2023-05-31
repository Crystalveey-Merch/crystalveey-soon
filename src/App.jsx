import "./App.css";
// import fashionImg from "./assets/fashion.png";
// import charityImg from "./assets/charity.png";
// import summerImg from "./assets/summer.jpg";
// import tourImg from "./assets/tour.jpg";
import communityImg from "./assets/community.jpg";

import whatsappSvg from "./assets/whatsapp.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i13fbgj",
        "template_sefbscy",
        form.current,
        "eHhT_sUnNq4xk-_5v"
      )
      .then(
        (result) => {
          alert(result.text + "!" + " " + "Email has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="px-36 py-10 flex flex-col justify-between h-screen pt-16 lg:px-12 lg:pt-8 lg:py-7 sm:px-8">
      <div className="relative flex flex-col gap-2 sm:gap-1">
        <h2 className="font-bold text-4xl text-black font-pro sm:text-2xl">
          {" "}
          CRYSTALVEÉY
        </h2>
        <h4 className=" text-sm font-bold text-black font-mono sm:font-medium">
          Fashion| Travel| Events| Consultations.
        </h4>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center 2xl:pr-40 lg:pr-0 lg:mt-24 lg:mb-20 sm:gap-7">
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className="flex flex-col items-center gap-2 text-5xl font-bold text-black font-poppins md:text-2xl sm:gap-1">
            <h2>Hey!</h2>
            <h2>We are cooking it up...</h2>
          </div>
          <p className="text-lg font-normal text-gray-600 font-serif sm:text-base">
            We are just a few days from our big launch. Sign up to be notified!
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex gap-5 sm:flex-col sm:w-full"
        >
          <input
            className="px-4 py-2 w-80 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition duration-500 ease-in-out sm:w-full"
            type="email"
            placeholder="Enter your email"
            required
            name="user_email"
          />
          <button
            className="px-8 py-2 rounded-md bg-black text-white font-bold hover:bg-gray-900 transition duration-500 ease-in-out sm:font-medium sm:text-base"
            type="submit"
          >
            Notify Me
          </button>
        </form>
        <img src={communityImg} alt="community" className="w-60 h-60 hidden lg:block" />
      </div>
      <div className="flex justify-between sm:flex-wrap sm:gap-4">
        <a
          href="#"
          className="text-gray-600 font-medium text-base md:text-sm sm:w-5/12 sm:flex sm:order-1"
        >
          Privacy Policy
        </a>
        <p className="font-semibold text-base text-gray-700 md:text-sm sm:w-full sm:flex sm:order-3 sm:text-center sm:justify-center">
          &copy; {new Date().getFullYear()} Crystalveey
          <span className="text-gray-600 pl-2"> All Rights Reserved</span>
        </p>
        <div className=" flex gap-4 md:gap-2 sm:w-5/12 sm:order-2 sm:justify-end">
          <a
            href="https://web.facebook.com/crystalveeyshop"
            className="text-gray-600 hover:text-gray-400 transition duration-500 ease-in-out"
          >
            <svg
              className="w-6 h-6 "
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.instagram.com/explorecrystalveey/"
            className="text-gray-600 hover:text-gray-400 transition duration-500 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="https://twitter.com/crystalveeyshop"
            className="text-gray-600 hover:text-gray-400 transition duration-500 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://wa.link/s55ykr"
            className="text-gray-600 hover:text-gray-400 transition duration-500 ease-in-out"
          >
            <img src={whatsappSvg} alt="whatsapp" className="h-7 w-7 " />
          </a>
        </div>
      </div>
      {/* <img src={fashionImg} alt="fashion" className="h-28 w-28 absolute left-16  top-60" />
      <img src={charityImg} alt="charity" className="h-32 w-32 absolute right-40  top-10" />
      <img src={planeImg} alt="aeroplane" className="h-20 w-20 absolute left-10 bottom-40" />
       */}
      {/* <img src={tourImg} alt="tour" className="h-72 w-72 absolute right-40  top-20" /> */}
      {/* <img src={summerImg} alt="summer" className="h-60 w-60 absolute left-32  bottom-32" /> */}
      <img
        src={communityImg}
        alt="community"
        className="h-72 w-72 absolute right-32  bottom-40 2xl:w-60 2xl:h-60 xl:right-10 lg:hidden"
      />
      <div className="absolute text-green-500"></div>
    </div>
  );
}

export default App;
