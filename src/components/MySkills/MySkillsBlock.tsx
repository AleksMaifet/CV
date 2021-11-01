import React from "react";
import s from './MySkills.module.css'


type MySkillsBlockType = {
	image:string
	text:string
	title:string
}


export const MySkillsBlock = React.memo((props:MySkillsBlockType) => {

	const {image,text,title} = props

	return (
		<React.Fragment>
			<div className={s.wrapperForBlockContainer}>
				<div className={s.blockContainerSkills}>
					<div className={s.imageContainerSkills}>
						<img src={image}/>
					</div>
					<div className={s.titleBlockSkills}>
						<p>{title}</p>
					</div>
					<div className={s.textBlockSkills}>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
})