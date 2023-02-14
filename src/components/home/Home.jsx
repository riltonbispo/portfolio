import React from "react";

import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import Perfil from "../../assets/perfil.png";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Olá, <span>Meu nome é</span>
        </p>

        <h1 className="home__title text-cs">
          <span>Rilton</span> Bispo
        </h1>

        <p className="home__job">
          <span className="text-cs">Eu sou</span> <b>Dev. Front-end</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={Perfil} alt="" className="home__profile" />
          </div>

          <p className="home__data home__data-one">
            <span className="text-lg">
              1 <b>+</b>
            </span>

            <span className="text-sm text-cs">
              Anos de <span>Experiencia</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">+20</span>

            <span className="text-sm text-cs">
              Pojetos <span>Completos</span>
            </span>
          </p>

          <img src={shapeOne} alt="" className="shape shape__1" />
          <img src={shapeTwo} alt="" className="shape shape__2" />
          <img src={shapeTwo} alt="" className="shape shape__3" />
        
        </div>

        <p className="home__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione
          minus quisquam perferendis nihil minima.quisquam perferendis.
        </p>

        <div className="home__socials">
          <a href="" className="home__social-link">
            <FaLinkedinIn />
          </a>
          <a href="" className="home__social-link">
            <FaDiscord />
          </a>
          <a href="" className="home__social-link">
            <FaGithub />
          </a>
        </div>

        <div className="home__btns">
          <a href="" className="btn text-cs">
            Download CV
          </a>
          <a href="" className="hero__link text-cs">
            My skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
