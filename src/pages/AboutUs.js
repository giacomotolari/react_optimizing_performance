import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/contact");
  };
  return (
    <>
      <p>This is About Us Page</p>
      <button onClick={handler}>Click me</button>
    </>
  );
};

export default AboutUs;
