import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href="https://twitter.com/Yosef96928387">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href="https://github.com/Yosef781227">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href="https://www.facebook.com/yosef.nakachew/">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href="https://www.linkedin.com/in/yosef-degarege-0a2941252/">
              <FaLinkedin />
            </a>
          </li>
        )}
     
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
            <FaTelegram/>
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
