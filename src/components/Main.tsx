import React from "react";
import {AboutMe} from "./AboutMe/AboutMe";
import {MySkills} from "./MySkills/MySkills";
import {MyWorks} from "./MyWorks/MyWorks";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";






export const Main = () => {
	return (
		<React.Fragment>
			<AboutMe/>
			<MySkills/>
			<MyWorks/>
			<RemoteWork/>
			<Contacts/>
			<Footer/>
		</React.Fragment>
	)
}