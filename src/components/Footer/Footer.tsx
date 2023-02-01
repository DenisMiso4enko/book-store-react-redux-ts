import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="left">@{date} bookstore</div>
      <div className="right">All right reserved</div>
    </footer>
  );
};

export default Footer;
