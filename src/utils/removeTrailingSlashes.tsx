import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith("/") && location.pathname !== "/") {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default RemoveTrailingSlash;