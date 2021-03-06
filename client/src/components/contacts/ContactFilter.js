import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef(0);
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form action="">
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts..."
        name=""
        id=""
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
