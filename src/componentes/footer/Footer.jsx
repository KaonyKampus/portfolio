import "./footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";


function Footer() {
  return (
    <footer className="Footer">
      <div className="iconsBox">
        <div className="icon"><a href="https://github.com/KaonyKampus/"  target="_blank"><img src={github} alt="GitHub"/></a></div>
        <div className="icon"><a href="https://www.linkedin.com/in/david-stiven-silva-velandia-ba3529236/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></div>
      </div>
      <h3>© 2025 Kaony Kampus • All rights reserved.</h3>
    </footer>



  );
}

export default Footer;
