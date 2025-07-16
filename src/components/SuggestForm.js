import React, { useState } from "react";

function SuggestForm({ close }) {
  const [form, setForm] = useState({
    name: "",
    type: "Indoor",
    cost: "Free",
    age: "Toddler",
    location: "Chicago",
    desc: "",
    link: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 1200);
  };

  if (submitted) return <div className="thanks">Thank you for your suggestion!</div>;

  return (
    <div className="form-modal">
      <form className="suggest-form" onSubmit={handleSubmit}>
        <h2>Suggest a Place</h2>
        <input name="name" placeholder="Place name" required value={form.name} onChange={handleChange} />
        <select name="type" value={form.type} onChange={handleChange}>
          <option>Indoor</option>
          <option>Outdoor</option>
        </select>
        <select name="cost" value={form.cost} onChange={handleChange}>
          <option>Free</option>
          <option>Paid</option>
        </select>
        <select name="age" value={form.age} onChange={handleChange}>
          <option>Toddler</option>
          <option>Preschool</option>
          <option>Elementary</option>
          <option>Tween</option>
        </select>
        <select name="location" value={form.location} onChange={handleChange}>
          <option>Chicago</option>
          <option>Naperville</option>
          <option>Downers Grove</option>
          <option>Glen Ellyn</option>
        </select>
        <textarea name="desc" placeholder="Description" value={form.desc} onChange={handleChange} />
        <input name="link" placeholder="Website link (optional)" value={form.link} onChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
}

export default SuggestForm;
