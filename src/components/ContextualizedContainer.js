import "./ContextualizedContainer.css";

const ContextualizedContainer = () => {
  return (
    <div className="mdiuser-card-details-outline-parent">
      <div className="mdiuser-card-details-outline">
        <div className="vector-parent">
          <img className="vector-icon15" alt="" src="/vector5.svg" />
          <img className="vector-icon16" alt="" src="/vector6.svg" />
        </div>
      </div>
      <div className="hero-title2">
        <div className="highly-contextualized-intervie-container">
          <p className="highly-contextualized">{`Highly Contextualized `}</p>
          <p className="interview">Interview</p>
        </div>
      </div>
      <div className="al-models-generate">
        Al models generate highly contextualized interviews for the candidates
        based on your Company profile, Job description and Candidate's CV.
      </div>
    </div>
  );
};

export default ContextualizedContainer;
