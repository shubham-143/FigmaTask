import MaskContainer from "../components/MaskContainer";
import Header from "../components/Header";
import StatsContainer from "../components/StatsContainer";
import BrandSection from "../components/BrandSection";
import SystemStepsContainer from "../components/SystemStepsContainer";
import PricingPlansContainer from "../components/PricingPlansContainer";
import TestimonialsContainer from "../components/TestimonialsContainer";
import SuccessStoriesContainer from "../components/SuccessStoriesContainer";
import DiscoverTheFutureContainer from "../components/DiscoverTheFutureContainer";
import FAQContainer from "../components/FAQContainer";
import CostReduceContainer from "../components/CostReduceContainer";
import ContextualizedContainer from "../components/ContextualizedContainer";
import AutomatedSchedulingContainer from "../components/AutomatedSchedulingContainer";
import "./ForEmployers.css";

const ForEmployers = () => {
  return (
    <div className="for-employers">
      <div className="group-parent">
        <div className="ellipse-parent">
          <div className="group-child" />
          <MaskContainer />
        </div>
        <div className="hero-title">
          <div className="power-up-your-container">
            <p className="power-up-your">Power Up Your Hiring</p>
            <p className="with-rework">with Rework .</p>
          </div>
          <div className="empower-your-business">{`Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire `}</div>
        </div>
        <div className="cta-button">
          <div className="book-a-demo">Book A Demo</div>
        </div>
        <div className="points">
          <div className="group-group">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="no-credit-required">No credit Required</div>
          </div>
          <div className="group-group">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="no-credit-required">
              Streamlined Recruitment Process
            </div>
          </div>
        </div>
        <Header />
        <StatsContainer
          numericValue="+360"
          hireStatsText="Happy Companies"
          kTop="586px"
          kLeft="852px"
        />
      </div>
      <div className="for-employers-child" />
      <BrandSection />
      <img className="vector-icon" alt="" src="/vector4.svg" />
      <div className="step-3-wrapper">
        <div className="step-3">Step-3</div>
      </div>
      <SystemStepsContainer />
      <PricingPlansContainer />
      <TestimonialsContainer />
      <SuccessStoriesContainer />
      <DiscoverTheFutureContainer />
      <div className="stats-parent">
        <div className="stats">
          <div className="stats1">
            <b className="no-credit-required">80%</b>
            <div className="reduction-in-your">
              Reduction in your recruitment TAT with the access to a wider
              talent pool on the platform
            </div>
          </div>
          <div className="stats-child" />
          <div className="stats1">
            <b className="no-credit-required">50%</b>
            <div className="reduction-in-your">
              Streamline your budgeting and save money while finding the top
              candidates
            </div>
          </div>
          <div className="stats-child" />
          <div className="stats1">
            <b className="no-credit-required">10k</b>
            <div className="reduction-in-your">
              Certified sourcing partners’ expertise
            </div>
          </div>
        </div>
        <div className="how-rework-ai-container">
          <span>{`How Rework AI has been a good `}</span>
          <span className="hiring-platform-for">
            Hiring platform for Companies
          </span>
        </div>
      </div>
      <FAQContainer />
      <div className="cta">
        <div className="optimize-your-hiring-strategy-parent">
          <div className="optimize-your-hiring">
            Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
          </div>
          <div className="discover-the-strengths">
            Discover the strengths and opportunities in your current hiring
            process. Our comprehensive Hiring Audit evaluates your strategy,
            identifies areas for improvement, and tailors a roadmap for success.
            Elevate your recruitment game with data-driven insights – because
            the right talent deserves the right approach.
          </div>
        </div>
        <div className="cta-button1">
          <div className="request-your-free">
            Request Your Free Hiring Audit
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <CostReduceContainer
            imageSizeId="/eosiconsai.svg"
            percentageText="60%"
            processDescription="Cost Reduce"
            recruitmentDescriptionTex="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <CostReduceContainer
            imageSizeId="/eosiconsai1.svg"
            percentageText="50% Faster"
            processDescription="Recruitment by TAT"
            recruitmentDescriptionTex="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <ContextualizedContainer />
          <AutomatedSchedulingContainer />
          <CostReduceContainer
            imageSizeId="/eosiconsai2.svg"
            percentageText="AI generated Interviews"
            processDescription="On what matters"
            recruitmentDescriptionTex="0 manual interventions, completely seamless experience for the candidates."
          />
          <CostReduceContainer
            imageSizeId="/fluenttasksapp20regular.svg"
            percentageText="in-built"
            processDescription="ATS"
            recruitmentDescriptionTex={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
          />
        </div>
        <div className="frame-child" />
        <div className="our-amazing-benefits-container">
          <span>{`Our Amazing Benefits `}</span>
          <span className="hiring-platform-for">Helpful For Your Hiring</span>
        </div>
      </div>
    </div>
  );
};

export default ForEmployers;
