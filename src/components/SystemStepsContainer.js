import DocumentUploadContainer from "./DocumentUploadContainer";
import "./SystemStepsContainer.css";

const SystemStepsContainer = () => {
  return (
    <div className="steps1">
      <div className="how-our-system-container">
        <span>{`How Our System `}</span>
        <span className="operates">Operates</span>
      </div>
      <div className="steps-parent">
        <DocumentUploadContainer
          actionButtonText="Upload Documents"
          candidateDetailsText="Shortlist the most qualified candidate and upload their details for the top companies"
          documentIconText="/frame-48095633.svg"
        />
        <div className="steps2">
          <div className="sign-up">Sign Up</div>
          <div className="follow-the-link">
            Follow the link below to sign up and get access of the current job
            postings
          </div>
          <img
            className="mingcuteuser-add-line-icon"
            alt=""
            src="/mingcuteuseraddline.svg"
          />
        </div>
        <DocumentUploadContainer
          actionButtonText="Get Rewards"
          candidateDetailsText="As soon as the candidate gets selected you get your benefits"
          documentIconText="/frame-480956331.svg"
          propHeight="54px"
        />
      </div>
      <div className="simple-button2">
        <div className="get-started1">Get Started</div>
        <div className="arrow2">
          <img className="vector-icon7" alt="" src="/vector1.svg" />
          <img className="vector-icon8" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default SystemStepsContainer;
