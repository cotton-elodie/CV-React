import React from "react";
import Experiences from '../Components/Experiences/Experiences';
import Formations from '../Components/Formations/Formations';
import Skill from '../Components/Skill/Skill';
import Presentation from "../Components/Presentation/Presentation";
import { Interest } from "../Components/Interest/Interest";

export  const Desktop = () => {
  return (
    <div id="desktop">
      <Presentation/>
      <Experiences />
      <Formations />
      <Skill />
      <Interest/>
    </div>
  );
};
