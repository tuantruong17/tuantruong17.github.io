// External
import { Link, useLocation } from "react-router-dom";

// Local
import "./styles.css";
import { HeaderLink } from "../../types";

export const Header = () => {
  const page = useLocation().pathname.split("/")[1];

  const links: HeaderLink[] = [
    {
      location: "",
      text: "Home",
    },
    {
      location: "about",
      text: "About",
    },
    {
      location: "work",
      text: "Work",
    },
  ];

  return (
    <div id="header">
      <div className="header-content content">
        {links.map((link) => (
          <Link
            key={link.location}
            className={`header-link${page === link.location ? " active" : ""}`}
            to={link.location}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
