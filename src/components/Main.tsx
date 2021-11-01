import React from "react";
import {AboutMe} from "./AboutMe/AboutMe";
import {MySkills} from "./MySkills/MySkills";
import {MyWorks} from "./MyWorks/MyWorks";






export const Main = () => {
	return (
		<React.Fragment>
			<AboutMe/>
			<MySkills/>
			<MyWorks/>
		</React.Fragment>
	)
}