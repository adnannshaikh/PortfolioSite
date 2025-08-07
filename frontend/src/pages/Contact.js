import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/contact', formData);
      alert(response.data.message || "Message sent!");
      setFormData({ name: '', email: '', message: '' }); // reset
    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <p>Have a question, feedback, or opportunity? Send me a message below!</p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
