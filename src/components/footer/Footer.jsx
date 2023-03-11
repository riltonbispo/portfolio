import React from "react";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">

        <div className="footer__container container socials grid">
          <div className="footer__socials">
              <a href="" className="footer__social-link">
                <FaLinkedinIn />
              </a>
              <a href="" className="footer__social-link">
                <FaDiscord />
              </a>
              <a href="" className="footer__social-link">
                <FaGithub />
              </a>
          </div>

          <p className="footer__copyright text-cs">Desenvolvido por <span>Rilton Bispo</span></p>
        </div>
     
      </footer>
    </div>
  )
}

export default Footer