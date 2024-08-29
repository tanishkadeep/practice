import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Display = () => {
  const location = useLocation();
  const { name, age } = location.state;

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div>
      <div>Name : {name}</div>
      <div>Age : {age}</div>
      <div></div>
    </div>
  );
};

export default Display;
