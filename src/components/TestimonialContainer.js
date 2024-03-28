import "./TestimonialContainer.css";

const TestimonialContainer = ({
  testimonialText,
  testimonialContent,
  clientNameText,
  hrManagerCompanyText,
}) => {
  return (
    <div className="component-16">
      <div className="rework-has-been">{testimonialText}</div>
      <div className="ellipse-group">
        <img className="frame-item" alt="" src={testimonialContent} />
        <div className="container1">
          <div className="theresa-webb">{clientNameText}</div>
          <div className="hr-manager-amazon">{hrManagerCompanyText}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;
