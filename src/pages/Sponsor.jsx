// import AnimatedTitle from "../components/AnimatedTitle";

// const ImageClipBox = ({ src, clipClass }) => (
//     <div className={`relative ${clipClass}`}>
//       <img
//         src={src}
//         alt="Contact"
//         className="w-full h-full object-cover mask-fade"
//       />
//     </div>
//   );

// const Sponsor = () => {
//   return (
//     <div id="contact" className="py-20 min-h-96 w-screen px-10 bg-gradient-to-r from-gray-900 via-black to-gray-900">
//       <div className="relative rounded-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 text-blue-50 sm:overflow-hidden shadow-2xl">
//         {/* Left side images */}
//         <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
//           <ImageClipBox
//             src="/img/contact-1.webp"
//             clipClass="contact-clip-path-1"
//           />
//         </div>

//         {/* Right side images */}
//         <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
//           <ImageClipBox
//             src="/img/swordman-partial.webp"
//             clipClass="absolute md:scale-125"
//           />
//         </div>

//         {/* Contact Section Content */}
//         <div className="flex flex-col items-center text-center relative z-10 px-5 sm:px-0">
//           <p className="mb-4 text-sm font-medium uppercase tracking-wide">
//             Partner with us
//           </p>

//           {/* Animated Title */}
//           <AnimatedTitle
//             title="let&#39;s s<b>h</b>ape the <br /> future of <br /> t<b>e</b>chnology t<b>o</b>gether."
//             className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mb-8"
//           />

//           <p className="mb-10 mt-8 text-lg font-light max-w-xl">
//           Whether you&apos;re looking to showcase your brand, support events, or collaborate with a vibrant community, we&apos;re here to make an impact. Let&apos;s achieve greatness together!
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="mt-4 px-5 sm:px-10 lg:px-40">
//           <form className="grid gap-6 bg-gray-800 bg-opacity-50 rounded-lg p-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
//               />
//             </div>
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
//             ></textarea>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsor;


// import AnimatedTitle from "../components/AnimatedTitle";

// const ImageClipBox = ({ src, clipClass }) => (
//   <div className={`relative ${clipClass}`}>
//     <img
//       src={src}
//       alt="Contact"
//       className="w-full h-full object-cover mask-fade"
//     />
//   </div>
// );

// const Sponsor = () => {
//   return (
//     <div
//       id="contact"
//       className="py-20 min-h-96 w-screen px-10 bg-gradient-to-r from-gray-900 via-black to-gray-900"
//     >
//       <div className="relative rounded-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 text-blue-50 sm:overflow-hidden shadow-2xl">
//         {/* Left side images */}
//         <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
//           <ImageClipBox
//             src="/img/contact-1.webp"
//             clipClass="contact-clip-path-1"
//           />
//         </div>

//         {/* Right side images */}
//         <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
//           <ImageClipBox
//             src="/img/swordman-partial.webp"
//             clipClass="absolute md:scale-125"
//           />
//         </div>

//         {/* Contact Section Content */}
//         <div className="flex flex-col items-center text-center relative z-10 px-5 sm:px-0">
//           <p className="mb-4 text-sm font-medium uppercase tracking-wide">
//             Partner with us
//           </p>

//           {/* Animated Title */}
//           <AnimatedTitle
//             title="let&#39;s s<b>h</b>ape the <br /> future of <br /> t<b>e</b>chnology t<b>o</b>gether."
//             className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mb-8"
//           />

//           <p className="mb-10 mt-8 text-lg font-light max-w-xl">
//             Whether you&apos;re looking to showcase your brand, support events, or
//             collaborate with a vibrant community, we&apos;re here to make an impact.
//             Let&apos;s achieve greatness together!
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="mt-4 px-5 sm:px-10 lg:px-40">

//           {/* Typeform Button */}
//           <div className="mt-6 text-center">
//             <a
//               href="https://l2ix3j99737.typeform.com/to/aEJ3lElR"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
//             >
//               Fill Out Typeform
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsor;

import AnimatedTitle from "../components/AnimatedTitle";
import { HamburgerMenu } from "../components/design/Navbar";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={`relative ${clipClass}`}>
    <img
      src={src}
      alt="Contact"
      className="w-full h-full object-cover mask-fade"
    />
  </div>
);

const Sponsor = () => {
  return (
    <div
      id="contact"
      className="py-20 min-h-96 w-screen px-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative"
    >
      <HamburgerMenu />

      <div className="relative rounded-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 text-blue-50 sm:overflow-hidden shadow-2xl">
        {/* Left side images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
        </div>

        {/* Right side images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
        </div>

        {/* Contact Section Content */}
        <div className="flex flex-col items-center text-center relative z-10 px-5 sm:px-0">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide">
            Partner with us
          </p>

          {/* Animated Title */}
          <AnimatedTitle
            title="let&#39;s s<b>h</b>ape the <br /> future of <br /> t<b>e</b>chnology t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] mb-8"
          />

          <p className="mb-10 mt-8 text-lg font-light max-w-xl">
            Whether you&apos;re looking to showcase your brand, support events, or
            collaborate with a vibrant community, we&apos;re here to make an impact.
            Let&apos;s achieve greatness together!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-4 px-5 sm:px-10 lg:px-40">
          {/* Typeform Button */}
          <div className="mt-6 text-center">
            <a
              href="https://l2ix3j99737.typeform.com/to/aEJ3lElR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Join Us as a Sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;


