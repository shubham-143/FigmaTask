import StatsContainer from "./StatsContainer";
import "./MaskContainer.css";

const MaskContainer = () => {
  return (
    <div className="mask-group">
      <StatsContainer numericValue="+10K" hireStatsText="Candidates Hired" />
      <img className="mask-group-child" alt="" src="/rectangle-39395@2x.png" />
    </div>
  );
};

export default MaskContainer;
