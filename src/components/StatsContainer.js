import { useMemo } from "react";
import "./StatsContainer.css";

const StatsContainer = ({ numericValue, hireStatsText, kTop, kLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: kTop,
      left: kLeft,
    };
  }, [kTop, kLeft]);

  return (
    <div className="rectangle-parent" style={groupDivStyle}>
      <div className="group-item" />
      <div className="group-inner" />
      <div className="k-candidates-hired-container">
        <p className="k1">
          <b>{numericValue}</b>
        </p>
        <p className="candidates-hired">{hireStatsText}</p>
      </div>
      <img className="vector-icon1" alt="" src="/vector.svg" />
    </div>
  );
};

export default StatsContainer;
