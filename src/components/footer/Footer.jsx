import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="right-footer">
        <h3>Support</h3>
        <ul>
          <li>Contact</li>
          <li>Legal Notice</li>
          <li>Privacy Policy</li>
          <li>General terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="middle-footer">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>careers</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Gift Cards</li>
          <li>Magazine</li>
          <li>Travel Giudes</li>
        </ul>
      </div>
      <div className="left-footer">
        <h3>Work With Us</h3>
        <ul>
          <li>Become a supplier</li>
          <li>Become an affiliate partner</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
