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
        <img src="img/ban.jpg" alt="Anime 1" />
        <img src="img/ban.jpg" alt="Anime 2" />
        <img src="img/ban.jpg" alt="Anime 3" />
        <img src="img/ban.jpg" alt="Anime 4" />
      </div>
      <b><center>My best Series of all time.</center></b>
    </div>
  );
}

export default Cont;
