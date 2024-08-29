import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/display", { state: form });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <label> Age: </label>
        <input type="number" name="age" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
