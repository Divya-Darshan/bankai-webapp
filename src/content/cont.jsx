import React from "react";
import "./cont.css";

function Cont() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm an anime content lover and YouTube creator dedicated to sharing the best anime moments,
          edits, and fan-made stories. I bring the energy of anime to life through visual storytelling and community engagement.
        </p>
      </div>

      <div className="gallery-grid">
        <img src="/img/anime1.jpg" alt="Anime 1" />
        <img src="/img/anime2.jpg" alt="Anime 2" />
        <img src="/img/anime3.jpg" alt="Anime 3" />
        <img src="/img/anime4.jpg" alt="Anime 4" />
        <img src="/img/anime5.jpg" alt="Anime 5" />
        <img src="/img/anime6.jpg" alt="Anime 6" />
      </div>
    </div>
  );
}

export default Cont;
