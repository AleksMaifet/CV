import React from "react";
import s from "./MyWorks.module.css";
import c from "../../App.module.css";
import {MyWorksBlock} from "./MyWorksBlock";




export const MyWorks = () => {

	const MyInfoForBlock = {
		image : {},
		textForProject: {
			nameOfProject: 'Name of project',
			descriptionOfProject:'Project description'
		},
	}


	return (
		<div className={s.myWorksWrapper}>
			<div className={c.container}>
				<div className={s.myWorksContainer}>
					<h2>My Works</h2>
				</div>
				<div className={s.wrapperForBlock}>
					<MyWorksBlock nameOfProject={MyInfoForBlock.textForProject.nameOfProject} descriptionOfProject={MyInfoForBlock.textForProject.descriptionOfProject}/>
					<MyWorksBlock nameOfProject={MyInfoForBlock.textForProject.nameOfProject} descriptionOfProject={MyInfoForBlock.textForProject.descriptionOfProject}/>
				</div>
			</div>
		</div>
	)
}