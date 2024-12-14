// src/components/Form.js
import React, { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import SuccessModal from '../../components/SuccessModal'; // Import the SuccessModal component

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    whatsapp: '',
    countryCode: '',
    location: '',
    occupation: '',
    purpose: '',
    investment: '',
    deliveryTime: '',
    monthlyIncome: '',
    suggestions: ''
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionDate = new Date(); // Get current date and time
    const dataWithDateTime = { ...formData, submissionDate };

    try {
      await addDoc(collection(db, 'formSubmissions'), dataWithDateTime);
      setShowModal(true); // Show modal on successful submission

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        age: '',
        whatsapp: '',
        countryCode: '',
        location: '',
        occupation: '',
        purpose: '',
        investment: '',
        deliveryTime: '',
        monthlyIncome: '',
        suggestions: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form, please try again.");
    }
  };

  const handleCloseModal = () => setShowModal(false); // Close modal

  return (
    <form onSubmit={handleSubmit} className="custom-form p-3">
      <div className="mb-3">
        <h2 className="mb-4 text-black">PC Build Inquiry Form</h2>
        <label className="form-label">Email_id: *</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Hello, What's your name? *</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">What's your exact age? *</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Provide your WhatsApp number: *</label>
        <input
          type="tel"
          className="form-control"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Provide your Country code (For India +91): *</label>
        <input
          type="text"
          className="form-control"
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Where are you located at? Mention the City or Town: *</label>
        <input
          type="text"
          className="form-control"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">What do you do for a living? *</label>
        <input
          type="text"
          className="form-control"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">For What Purpose does this PC is gonna serve you? *</label>
        <input
          type="text"
          className="form-control"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">The Best Investment you are planning for this PC? *</label>
        <select
          className="form-select"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Rs 30,000 - Rs 50,000">Rs 30,000 - Rs 50,000</option>
          <option value="Rs 50,000 - Rs 75,000">Rs 50,000 - Rs 75,000</option>
          <option value="Rs 75,000 - Rs 100,000">Rs 75,000 - Rs 100,000</option>
          <option value="More than 1 Lakh">More than 1 Lakh</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">When do you need the PC by? *</label>
        <select
          className="form-select"
          name="deliveryTime"
          value={formData.deliveryTime}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Right now">Right now</option>
          <option value="In few days">In few days</option>
          <option value="In a month">In a month</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">What is your monthly income? *</label>
        <select
          className="form-select"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Student">Student</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Rs 10,000 - Rs 25,000">Rs 10,000 - Rs 25,000</option>
          <option value="Rs 25,000 - Rs 50,000">Rs 25,000 - Rs 50,000</option>
          <option value="Rs 50,000 - Rs 75,000">Rs 50,000 - Rs 75,000</option>
          <option value="Rs 75,000 - Rs 1 Lakh">Rs 75,000 - Rs 1 Lakh</option>
          <option value="More Than 1 Lakh">More Than 1 Lakh</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Suggestions: *</label>
        <textarea
          className="form-control"
          name="suggestions"
          value={formData.suggestions}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>

      {/* Success modal component */}
      <SuccessModal show={showModal} onClose={handleCloseModal} />
    </form>
  );
};

export default Form;
