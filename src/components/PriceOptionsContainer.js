import { useMemo } from "react";
import "./PriceOptionsContainer.css";

const PriceOptionsContainer = ({
  durationNumber,
  paymentPlanDuration,
  monthlyPriceText,
  propLeft,
  propLeft1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="frame-container">
      <div className="suitable-for-companies-with-5-parent">
        <div className="suitable-for-companies">
          Suitable for companies with 5-10 openings
        </div>
        <div className="frame-div">
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons.svg" />
            <div className="interview-ready-candidates">
              10 interview-ready candidates
            </div>
          </div>
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons.svg" />
            <div className="interview-ready-candidates">
              Unlimited job postings
            </div>
          </div>
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons.svg" />
            <div className="interview-ready-candidates">
              Receive pre-vetted profiles within 48 hours
            </div>
          </div>
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons1.svg" />
            <div className="interview-ready-candidates">
              Dedicated account manager
            </div>
          </div>
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons1.svg" />
            <div className="interview-ready-candidates">
              Assistance with interview scheduling
            </div>
          </div>
          <div className="icons-parent">
            <img className="icons" alt="" src="/icons1.svg" />
            <div className="interview-ready-candidates">Custom reports</div>
          </div>
        </div>
      </div>
      <div className="parent" style={frameDivStyle}>
        <div className="div">{durationNumber}</div>
        <div className="month">{paymentPlanDuration}</div>
      </div>
      <div className="group" style={frameDiv1Style}>
        <div className="div1">₹</div>
        <div className="div2">{monthlyPriceText}</div>
        <div className="month1">/month</div>
      </div>
      <div className="simple-button3">
        <div className="get-started2">Get Started</div>
        <div className="arrow3">
          <img className="vector-icon9" alt="" src="/vector1.svg" />
          <img className="vector-icon10" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default PriceOptionsContainer;
