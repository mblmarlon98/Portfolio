import React from "react";
import { useNavigate } from "react-router-dom";

export const withRouter = (Component: React.ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };

  return Wrapper;
};
