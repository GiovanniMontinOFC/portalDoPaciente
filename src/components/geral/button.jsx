import React from "react";
import { Link } from "react-router-dom";


const Button = ({ path, text, className }) => {

  return (
    <Link to={path} className="link">
      <button className={className} >
        {text}
      </button>
    </Link>
  );
};

export default Button;