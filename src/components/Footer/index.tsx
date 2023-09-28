// External
import Tooltip from "@mui/material/Tooltip";

// Local
import "./styles.css";

export const Footer = () => {
  return (
    <>
      <div className="content" id="footer">
        <div className="column">
          <p>See me as a fit for a role?</p>
          <p>Want to get to know more about me?</p>
          <p>And so on...?</p>
          <p>
            Find what you need over there!{" "}
            <span className="pointing-right-icon">👉</span>
          </p>
        </div>
        <div className="column">
          <h3>Profiles</h3>
          <div className="social-list">
            <div>
              <a href="https://github.com/tuantruong17">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/tuan-truong-48bb3a18a/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="https://docs.google.com/document/d/10mpg2TKrLqcwTBTibHFN28h8WSkpiH1E">
                <i className="fa-solid fa-file"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <h3>Contacts</h3>
          <div className="social-list">
            <div>
              <a href="mailto:truonghuynhanhtuandn99@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div>
              <Tooltip title="+1 (309) 948-0334">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </Tooltip>
            </div>
            <div>
              <Tooltip title="#emlatuanday">
                <i className="fa-brands fa-discord"></i>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright">&copy; 2023 Tuan Truong</div>
    </>
  );
};
