import "./HeaderBlog.scss";
import { useTranslation } from "react-i18next";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const HeaderBlog = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <a className="menu-back" href="/">
        <IoMdArrowRoundBack />
        &nbsp;&nbsp;
        {t("Back to the main page")}
      </a>
      <div className="social-blog">
        <a href="https://www.linkedin.com/in/thomas-augot" target="_blank" rel="noreferrer">
          <IconContext.Provider
            value={{ color: "white", size: "53px", className: "logo-blog-socials" }}
          >
            <SlSocialLinkedin />
          </IconContext.Provider>
        </a>
        <a href="https://github.com/thomasaugot" target="_blank" rel="noreferrer">
          <IconContext.Provider
            value={{ color: "white", size: "61px", className: "logo-blog-socials github" }}
          >
            <AiFillGithub />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default HeaderBlog;
