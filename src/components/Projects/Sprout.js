import React from "react";

import SproutHero from '../../assets/sprout_hero.png';

const Sprout = () => {
    return (
      <React.Fragment>
      <section className="pageContainer" id="sproutPage">
        <section id="sproutHeader">
        <h1 className="projectHeader" id="sprout">Sprout</h1>
        <img id="sproutHero" src={SproutHero} alt="Sprout Hero Mockup" />
        </section>

        </section>
        </React.Fragment>
    )}

export default Sprout;