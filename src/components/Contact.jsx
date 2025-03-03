import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import "./Contact.css";

const ImageClipBox = ({ src, clipClass }) => (
  <motion.div
    className={clipClass}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -10, 0], opacity: 1 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
  >
    <img src={src} alt="Contact" />
  </motion.div>
);

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      id="contact"
      className="my-20 min-h-96 w-screen px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="docr relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden h-[600px] w-[1500px]">
        {/* Floating Images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center text-center z-10 relative">
          <p className="mb-10 font-general text-[15px] uppercase">
            Join Anantam bkbiet
          </p>

          <AnimatedTitle
            title="let&#39;s s<b>h</b>ape the <br /> future of <br /> t<b>e</b>chnology t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <motion.div className="mt-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button
                title="Contact Us"
                containerClass="cursor-pointer z-50 relative"
                onClick={() => {
                  console.log("Button Clicked!");
                  setIsModalOpen(true);
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 mb-[100px]"
            style={{ backgroundColor: "#f2be2265" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black p-10 rounded-lg w-[95%] max-w-lg text-white relative shadow-xl min-h-[550px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Logo */}
              <img src="/img/logo1.png" alt="Company Logo" className="dp" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500"
              >
                ✖
              </button>

              <h3
                className="text-3xl font-bold mb-8 text-center"
                style={{ color: "#ffbc21" }}
              >
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg font-medium"
                    style={{ color: "#ffbc21" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="dk1 p-4 rounded-md bg-gray-600/90 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg font-medium"
                    style={{ color: "#ffbc21" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-lg font-medium"
                    style={{ color: "#ffbc21" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-red-500 py-3 text-lg rounded-lg text-white font-semibold hover:bg-red-600 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
