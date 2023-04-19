import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  const handleClick = async () => {
    // ContactData component is imported dynamically (only when the button is clicked)
    // import() returns a promise 
    const ContactData = await import("../components/ContactData");
    // ".default" is needed because of the way the module is exported (default export)
    setContactData(ContactData.default);
    // ".ContactData()" is needed because of the way the module is exported (named export)
    // setContactData(ContactData.ContactData());
  };

  return (
    <div id="Contact">
      <button onClick={handleClick}>Load Data</button>
      {contactData}
    </div>
  );
};

export default Contact
