import React from "react";

import Button from "../../../shared/Button/Button";

const Contact = props => {
  return (
    <>
        <p>thiagohugo2018@gmail.com <br/> +502 4574-6057 </p>
        <Button text="Download CV " onClick={props.onClick} />
    </>
  );
};

export default Contact;