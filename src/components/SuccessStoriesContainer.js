import HiringProcessContainer from "./HiringProcessContainer";
import "./SuccessStoriesContainer.css";

const SuccessStoriesContainer = () => {
  return (
    <div className="success-stories">
      <div className="success-stories1">
        <span>{`Success `}</span>
        <span className="stories">Stories</span>
      </div>
      <div className="component-11-parent">
        <HiringProcessContainer dimensionsCode="/unsplashmpdlxiig0p0@2x.png" />
        <HiringProcessContainer dimensionsCode="/unsplashmpdlxiig0p01@2x.png" />
        <HiringProcessContainer dimensionsCode="/unsplashmpdlxiig0p02@2x.png" />
      </div>
      <div className="frame-parent5">
        <div className="frame-inner" />
        <div className="frame-child1" />
      </div>
    </div>
  );
};

export default SuccessStoriesContainer;
