import { useMemo } from "react";
import "./DocumentUploadContainer.css";

const DocumentUploadContainer = ({
  actionButtonText,
  candidateDetailsText,
  documentIconText,
  propHeight,
}) => {
  const shortlistTheMostStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="steps">
      <div className="upload-documents">{actionButtonText}</div>
      <div className="steps-inner">
        <div className="shortlist-the-most-qualified-c-wrapper">
          <div className="shortlist-the-most" style={shortlistTheMostStyle}>
            {candidateDetailsText}
          </div>
        </div>
      </div>
      <img className="steps-child" alt="" src={documentIconText} />
    </div>
  );
};

export default DocumentUploadContainer;
