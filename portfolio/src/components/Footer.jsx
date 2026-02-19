import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Nishant Kumar Pandey</span>
        <span className="footer-muted"></span>
      </div>
    </footer>
  );
};

export default Footer;
