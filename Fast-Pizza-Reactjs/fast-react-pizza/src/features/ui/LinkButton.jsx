import { Link, Navigate, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
    const navigate = useNavigate();
  if (to === "-1") {
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;
  }
  return (
    <Link to={to} className="text-sm text-blue-400 hover:text-blue-600">
      {children}
    </Link>
  );
}

export default LinkButton;
