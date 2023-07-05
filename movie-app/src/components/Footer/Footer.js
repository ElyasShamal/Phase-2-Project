import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammad-elyas-shamal-b975b7275/",
    },
    { title: "GitHub", url: "https://github.com/ElyasShamal" },
  ];

  return (
    <footer>
      <ul>
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            <li>
              {link.title === "LinkedIn" && <FaLinkedin />}
              {link.title === "GitHub" && <FaGithub />}
              {link.title}
            </li>
          </a>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
