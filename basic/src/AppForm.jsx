import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  // input tag adding event handler
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
          }}
        >
          <label htmlFor="name">이름 </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInput}
          />
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInput}
          />
          <div>
            <button>submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
