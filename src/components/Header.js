import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-items-parent">
      <div className="nav-items">
        <div className="nav-item">
          <div className="talent-finder">Talent Finder</div>
        </div>
        <div className="nav-item">
          <div className="talent-finder">For Recruiters</div>
        </div>
        <div className="nav-item2">
          <div className="for-employers1">For Employers</div>
          <img className="nav-item-child" alt="" src="/vector-451.svg" />
        </div>
        <div className="nav-item">
          <div className="talent-finder">About Us</div>
        </div>
        <div className="nav-item">
          <div className="talent-finder">Company</div>
        </div>
      </div>
      <Logo
        logoPosition="absolute"
        logoTop="36px"
        logoLeft="120px"
        rectangleDivBackgroundColor="#5c27c0"
        rectangleDivBorder="1.4px solid #5c27c0"
        aiColor="#fff"
        reColor="#5c27c0"
        workColor="#fff"
      />
      <div className="simple-button-parent">
        <div className="simple-button">
          <div className="log-in">Log In</div>
          <div className="arrow">
            <img className="vector-icon2" alt="" src="/vector1.svg" />
            <img className="vector-icon3" alt="" src="/vector2.svg" />
          </div>
        </div>
        <div className="simple-button1">
          <div className="log-in">Get Started</div>
          <div className="arrow">
            <img className="vector-icon2" alt="" src="/vector1.svg" />
            <img className="vector-icon3" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
