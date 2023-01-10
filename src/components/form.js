import React from "react";
import "../assets/css/form.css";

const initForm = {
  email: "",
  message: "",
};
const Form = () => {
  const [form, setForm] = React.useState(initForm);
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      return alert("You must complete all fields");
    }
    //console.log(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email));
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      return alert("Invalid email address");
    }

    fetch("https://formsubmit.co/ajax/96b6a49b5ff2df46a221861c8b85529e", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert("Message sent succesfully"))
      .catch((error) => alert("Sorry, something went wrong"))
      .finally(setForm(initForm));
  };
  //console.log(form);
  return (
    <div className="form-container">
      <h1>Get in Touch</h1>
      <p>For all your queries, please send us an email through this form.</p>
      <form>
        <div className="container-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handlerChange}
            value={form.email}
          />
        </div>
        <div className="container-textarea">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handlerChange}
            value={form.message}
          ></textarea>
          <button onClick={handlerSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
