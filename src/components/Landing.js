import React from "react";
import TitleCard from './LandingCards/TitleCard';
import FeaturedCard from './LandingCards/FeaturedCard';

const Landing = () => {
    return (
      <React.Fragment>
        <TitleCard />
        <FeaturedCard />
      </React.Fragment>
    );
}

export default Landing;