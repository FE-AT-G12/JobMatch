const footerStyle = {
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
  padding: "1em 0",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
};
function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="footer-container">
        
      </div>
      <div className="footer-bottom">
        <p>© 2024 Job Match. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
