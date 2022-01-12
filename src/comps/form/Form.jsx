import { useState } from "react";
import "./form.css";

const Form = ({ addUser }) => {
  //LOGIC HERE

  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("female");
  const [role, setRole] = useState("developer");

  const handleClick = (event) => {
    event.preventDefault();
    const user = {
      username,
      gender,
      role,
    };
    addUser(user);
  };

  return (
    <form>
      <h2>User Managment</h2>
      <label>
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onFocus={() => console.log("focus")}
          onBlur={() => console.log("blur")}
        />
      </label>
      <div className="gender-container">
        <p>Gender</p>
        <label>
          <p>Female</p>
          <input
            onChange={(event) => setGender(event.target.value)}
            type="radio"
            name="gender"
            defaultChecked
            value="female"
          />
        </label>
        <label>
          <p>Male</p>
          <input
            onChange={(event) => setGender(event.target.value)}
            type="radio"
            name="gender"
            value="male"
          />
        </label>
        <label>
          <p>Other</p>
          <input
            onChange={(event) => setGender(event.target.value)}
            type="radio"
            name="gender"
            value="other"
          />
        </label>
      </div>
      <div className="role-container">
        <p>Role</p>
        <select
          defaultValue={role}
          onChange={(event) => setRole(event.target.value)}
        >
          <option value="project_manager">Project Manager</option>
          <option value="developer">developer</option>
          <option value="submitter">Submitter</option>
        </select>
      </div>
      <button onClick={(event) => handleClick(event)}>ADD USER</button>
    </form>
  );
};

export default Form;
