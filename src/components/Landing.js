import React from "react";
import TitleCard from './LandingCards/TitleCard';
import FeaturedCard from './LandingCards/FeaturedCard';
import ProjectsCard from './LandingCards/ProjectsCard';
import WorkCard from './LandingCards/WorkCard';
import ConnectCard from './LandingCards/ConnectCard';

const Landing = () => {
    return (
      <React.Fragment className="landingBody">
        <section className="landingContainer">

        <section className="child">
          <TitleCard />
        </section>

        <section className="child">
        <FeaturedCard />
        </section>

        <section className="child">
        <ProjectsCard />
        </section>

        <section className="child">
        <WorkCard />
        </section>

        <section className="child">
        <ConnectCard />
        </section>   

        </section>
      </React.Fragment>
    );
}

export default Landing;