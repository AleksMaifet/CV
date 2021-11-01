import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {MySkills} from "../MySkills/MySkills";
import {MyWorks} from "../MyWorks/MyWorks";
import {Main} from "../Main";


export const PATH = {
	MAIN: '/main',
	SKILLS: '/skills',
	WORKS: '/works',
}

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path={'/'} exact render={() => <Redirect to={PATH.MAIN}/>}/>
				<Route path={PATH.MAIN} render={() => <Main/>}/>
				<Route path={PATH.SKILLS} render={() => <MySkills/>}/>
				<Route path={PATH.WORKS} render={() => <MyWorks/>}/>
			</Switch>
		</div>
	)
}
