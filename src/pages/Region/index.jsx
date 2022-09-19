import React from "react";
import { GET_REGION } from "../../services/api";
import { useLocation } from "react-router-dom";

const Region = () => {
  const [local, setLocal] = React.useState([]);
  const { state } = useLocation();
  const val = state.region;

  const handleRegion = async (value) => {
    const { url, options } = GET_REGION(value);
    const response = await fetch(url, options);
    const data = await response.json();
    setLocal(data);
  };

  React.useEffect(() => {
    handleRegion(val);
  }, []);
  console.log(state);
  return <div>Region</div>;
};

export default Region;
