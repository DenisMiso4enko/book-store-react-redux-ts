import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      alert("You are subscribed");
    }
  };
  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Subscribe to newsletter</h2>
      <p className="subscribe__text">
        Be the first to know about IT Books, upcoming release, exclusive offers
        and others
      </p>
      <form className="subscribe__form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <button className="btn-subscribe" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
