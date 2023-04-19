import { useState, lazy } from "react";
const CompanyPhoto = lazy(() => import("../components/CompanyPhoto"));

const AboutUs = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  return (
    <div id="About">
      <br />
      <p>About Us </p>
      <button onClick={() => setShowPhoto(!showPhoto)}>
        {showPhoto ? "hide photo" : "show photo"}
      </button>
      {showPhoto && <CompanyPhoto />}
    </div>
  );
};

export default AboutUs;
