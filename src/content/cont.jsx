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
        <a href="https://youtu.be/oRpZuqdpdQU?feature=shared" target="_blank" rel="noopener noreferrer">
          <img src="https://img.youtube.com/vi/oRpZuqdpdQU/hqdefault.jpg" alt="Anime 1" />
        </a>
        <a href="https://youtu.be/_QV3akb-w2Y?feature=shared" target="_blank" rel="noopener noreferrer">
          <img src="https://img.youtube.com/vi/_QV3akb-w2Y/hqdefault.jpg" alt="Anime 2" />
        </a>
        <a href="https://youtu.be/Cl06BG8fSpw?feature=shared" target="_blank" rel="noopener noreferrer">
          <img src="https://img.youtube.com/vi/Cl06BG8fSpw/hqdefault.jpg" alt="Anime 3" />
        </a>
        <a href="https://youtu.be/IVH5HIe7kHw?feature=shared" target="_blank" rel="noopener noreferrer">
          <img src="https://img.youtube.com/vi/IVH5HIe7kHw/hqdefault.jpg" alt="Anime 4" />
        </a>
      </div>

      <b><center>My best Series of all time.</center></b>
    </div>
  );
}

export default Cont;
