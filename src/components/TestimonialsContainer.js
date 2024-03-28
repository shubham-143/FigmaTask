import TestimonialContainer from "./TestimonialContainer";
import "./TestimonialsContainer.css";

const TestimonialsContainer = () => {
  return (
    <div className="testimonials">
      <div className="customer-testimonials">
        <span>{`Customer `}</span>
        <span className="testimonials1">Testimonials</span>
      </div>
      <div className="frame-parent4">
        <div className="component-16-parent">
          <TestimonialContainer
            testimonialText="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
            testimonialContent="/ellipse-2@2x.png"
            clientNameText="Theresa Webb"
            hrManagerCompanyText="HR Manager, Amazon"
          />
          <TestimonialContainer
            testimonialText="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
            testimonialContent="/ellipse-1@2x.png"
            clientNameText="Ronald Richards"
            hrManagerCompanyText="HR Manager, Google"
          />
        </div>
        <div className="component-16-parent">
          <TestimonialContainer
            testimonialText="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
            testimonialContent="/ellipse-11@2x.png"
            clientNameText="Savannah Nguyen"
            hrManagerCompanyText="HR Manager, Microsoft"
          />
          <TestimonialContainer
            testimonialText="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
            testimonialContent="/ellipse-12@2x.png"
            clientNameText="Ronald Richards"
            hrManagerCompanyText="HR Manager, Google"
          />
        </div>
        <div className="component-16-parent">
          <TestimonialContainer
            testimonialText="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
            testimonialContent="/ellipse-21@2x.png"
            clientNameText="Theresa Webb"
            hrManagerCompanyText="HR Manager, Amazon"
          />
          <TestimonialContainer
            testimonialText="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
            testimonialContent="/ellipse-13@2x.png"
            clientNameText="Ronald Richards"
            hrManagerCompanyText="HR Manager, Google"
          />
        </div>
      </div>
      <div className="what-others-has">What others has say About Us</div>
    </div>
  );
};

export default TestimonialsContainer;
