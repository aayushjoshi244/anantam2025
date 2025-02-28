import { FaDiscord, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://www.instagram.com/bkbiet.anantam?igsh=MXB5N3RwN2w2djF1ag==", icon: <FaInstagram /> },
];

const Footer = ({ isProblemStatement }) => {
  return (
    <footer
      className={`w-screen text-black sm:py-4 pt-4 pb-3 mt-0 ${
        isProblemStatement ? "bg-gold-300" : ""
      }`}
      style={{
        backgroundImage: "url('/img/footer.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Anantam BKBIET 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}

          <a
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline md:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
