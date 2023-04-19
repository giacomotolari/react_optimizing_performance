import Photo from "../assets/images/company.avif";

function CompanyPhoto() {
  return (
    <div style={{ marginTop: "2em" }}>
      <img src={Photo} alt="company" style={{width: "70vw"}} />
    </div>
  );
}

export default CompanyPhoto;
