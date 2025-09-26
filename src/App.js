import React, { useState, useRef } from 'react';

function App() {
  return (
    <div>
      <ControlledForm />
      <UncontrolledForm />
      <MultiFieldForm />
      <FormWithValidation />
    </div>
  );
}

// 1. Control Component
function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ім'я: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Control Component</label>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    );
}

// 2. Uncontrolled Component
function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log(`Ім'я: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Uncontrolled Component</label>
      <div>
        <label>
          Ім'я:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    );
}

// 3. Multifield Form
function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Multifield Form</label>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Вік:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// 4. Form with Validation
function FormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (!email.includes("@") || email === "") {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Valid email");
    }
  };

  return (
    <form onSubmit={handleChange}>
      <label>Form with Validation</label>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;