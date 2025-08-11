import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        Contact Us
      </h1>

      <button>Submit</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
      </form>
    </div>
  );
}

export default Contact;
