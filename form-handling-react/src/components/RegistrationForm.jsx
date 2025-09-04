import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      alert("Must fill in the blanks");
    }

    if (!email) {
      alert("Must fill in blanks");
    }
    if (!password) {
      alert("Must fill in blanks");
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }

    if (!/\d/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password =
        "Password must contain at ;east one special character";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default RegistrationForm;
