import PriceOptionsContainer from "./PriceOptionsContainer";
import "./PricingPlansContainer.css";

const PricingPlansContainer = () => {
  return (
    <div className="pricing-plans">
      <div className="choose-your-simple-container">
        <span>{`Choose Your Simple, `}</span>
        <span className="transparent-pricing">Transparent Pricing</span>
      </div>
      <div className="frame-parent1">
        <PriceOptionsContainer
          durationNumber="1"
          paymentPlanDuration="Month"
          monthlyPriceText="199.00"
        />
        <div className="frame-parent2">
          <div className="suitable-for-companies-with-5-group">
            <div className="suitable-for-companies1">
              Suitable for companies with 5-10 openings
            </div>
            <div className="frame-parent3">
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons.svg" />
                <div className="interview-ready-candidates1">
                  10 interview-ready candidates
                </div>
              </div>
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons.svg" />
                <div className="interview-ready-candidates1">
                  Unlimited job postings
                </div>
              </div>
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons.svg" />
                <div className="interview-ready-candidates1">
                  Receive pre-vetted profiles within 48 hours
                </div>
              </div>
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons1.svg" />
                <div className="interview-ready-candidates1">
                  Dedicated account manager
                </div>
              </div>
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons1.svg" />
                <div className="interview-ready-candidates1">
                  Assistance with interview scheduling
                </div>
              </div>
              <div className="icons-parent4">
                <img className="icons6" alt="" src="/icons1.svg" />
                <div className="interview-ready-candidates1">
                  Custom reports
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="div3">3</div>
            <div className="months">Months</div>
          </div>
          <div className="parent1">
            <div className="div4">₹</div>
            <div className="most-popular">149.00</div>
            <div className="month2">/month</div>
          </div>
          <div className="simple-button4">
            <div className="get-started3">Get Started</div>
            <div className="arrow4">
              <img className="vector-icon11" alt="" src="/vector1.svg" />
              <img className="vector-icon12" alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="most-popular-wrapper">
              <div className="most-popular">Most Popular</div>
            </div>
          </div>
        </div>
        <PriceOptionsContainer
          durationNumber="6"
          paymentPlanDuration="Months"
          monthlyPriceText="169.00"
          propLeft="calc(50% - 55px)"
          propLeft1="calc(50% - 112.5px)"
        />
      </div>
      <div className="simple-button5">
        <div className="book-a-demo1">Book a Demo</div>
        <div className="arrow4">
          <img className="vector-icon11" alt="" src="/vector1.svg" />
          <img className="vector-icon12" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default PricingPlansContainer;
