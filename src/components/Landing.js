import React from "react";
import TitleCard from './LandingCards/TitleCard';
import FeaturedCard from './LandingCards/FeaturedCard';
import ProjectsCard from './LandingCards/ProjectsCard';
import WorkCard from './LandingCards/WorkCard';

const Landing = () => {
    return (
      <React.Fragment>
        <TitleCard />
        <FeaturedCard />
        <ProjectsCard />
        <WorkCard />
      </React.Fragment>
    );
}

export default Landing;