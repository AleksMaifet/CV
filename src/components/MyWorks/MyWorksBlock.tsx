import React from "react";
import s from "./MyWorks.module.css";
import {Button} from "../Button/Button";



type MyWorksBlockType = {
	nameOfProject:string
	descriptionOfProject:string
}




export const MyWorksBlock = React.memo((props:MyWorksBlockType) => {

	const {nameOfProject, descriptionOfProject} = props
	const buttonValue = 'Watch'

	return (
		<React.Fragment>
			<div className={s.wrapperForBlockContainer}>
				<div className={s.blockContainerWorks}>
					<div className={s.titleBlockWorks}>
						<Button buttonValue={buttonValue}/>
					</div>
					<div className={s.textBlockWorks}>
						<p>{nameOfProject}</p>
					</div>
					<div className={s.textBlockWorks}>
						<p className={s.text}>{descriptionOfProject}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
})







// 	return (
// 		<React.Fragment>
// 			<div className={s.wrapperForBlockContainer}>
// 				<div className={s.blockContainerWorks}>
// 					<div className={s.titleBlockWorks}>
// 						<Button buttonValue={buttonValue}/>
// 					</div>
// 					<div className={s.textBlockWorks}>
// 						<p>{nameOfProject}</p>
// 					</div>
// 					<div className={s.textBlockWorks}>
// 						<p className={s.text}>{descriptionOfProject}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	)
// })