import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeatureTiles from '../components/sections/FeaturesTiles.js'
import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeatureTiles topDivider />
      <Testimonial topDivider />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;