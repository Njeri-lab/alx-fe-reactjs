import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email) {
      alert("Must fill in the blanks");
    }

    if (password.length < 8) {
      alert("Passwprd must be at least 8 characters long");
    }

    if (!/\d/.test(password)) {
      alert("Password must contain at least one number");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      alert("Password must contain at ;east one special character");
    }

    alert("Form submitted successfully");
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

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default RegistrationForm;
