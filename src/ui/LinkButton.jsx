/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
    const navigate = useNavigate();
  const className = "text-blue-500 hover:text-blue-600 hover:underline";
  if (to === -1)
    return (
      <Link to={to} className={className} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
