import { useMemo } from "react";
import "./Logo.css";

const Logo = ({
  logoPosition,
  logoTop,
  logoLeft,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  aiColor,
  reColor,
  workColor,
}) => {
  const logoStyle = useMemo(() => {
    return {
      position: logoPosition,
      top: logoTop,
      left: logoLeft,
    };
  }, [logoPosition, logoTop, logoLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  const aiStyle = useMemo(() => {
    return {
      color: aiColor,
    };
  }, [aiColor]);

  const reStyle = useMemo(() => {
    return {
      color: reColor,
    };
  }, [reColor]);

  const workStyle = useMemo(() => {
    return {
      color: workColor,
    };
  }, [workColor]);

  return (
    <div className="logo" style={logoStyle}>
      <div className="logo-child" style={rectangleDivStyle} />
      <div className="logo-item" style={rectangleDiv1Style} />
      <div className="ai" style={aiStyle}>
        ai
      </div>
      <div className="rework">
        <span className="re" style={reStyle}>
          <span className="r">r</span>
          <span className="e">e</span>
        </span>
        <span className="work" style={workStyle}>
          work
        </span>
      </div>
    </div>
  );
};

export default Logo;
