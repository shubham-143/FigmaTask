import "./CostReduceContainer.css";

const CostReduceContainer = ({
  imageSizeId,
  percentageText,
  processDescription,
  recruitmentDescriptionTex,
}) => {
  return (
    <div className="eos-iconsai-parent">
      <img className="eos-iconsai" alt="" src={imageSizeId} />
      <div className="hero-title1">
        <div className="cost-reduce">
          <p className="p">{percentageText}</p>
          <p className="cost-reduce1">{processDescription}</p>
        </div>
      </div>
      <div className="zero-overhead-in">{recruitmentDescriptionTex}</div>
    </div>
  );
};

export default CostReduceContainer;
