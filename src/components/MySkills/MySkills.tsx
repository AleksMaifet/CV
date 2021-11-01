import React from "react";
import {MySkillsBlock} from "./MySkillsBlock";
import s from './MySkills.module.css'
import c from '../../App.module.css'


export const MySkills = () => {

	const MyInfoForBlock = {
		image : {
			React: 'https://ru.reactjs.org/logo-og.png',
			Js: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wl1yHDBVvICGOC3vW4ZQAoTnNwoipyR1Wg&usqp=CAU',
			Redux: 'https://miro.medium.com/max/800/1*ZxmcaOzul181U6BT5z-Ipw.png',
		},
		text: {
			TextForReact: 'My knowledge and experience'
		},
		title:{
			React:'React',
			Js:'Js',
			Redux:'Redux',
		}
	}

	return (
		<div className={s.mySkillsWrapper}>
			<div className={c.container}>
				<div className={s.mySkillsContainer}>
					<h2>My skills</h2>
				</div>
				<div className={s.wrapperForBlock}>
					<MySkillsBlock image={MyInfoForBlock.image.React} text={MyInfoForBlock.text.TextForReact} title={MyInfoForBlock.title.React}/>
					<MySkillsBlock image={MyInfoForBlock.image.Js} text={MyInfoForBlock.text.TextForReact} title={MyInfoForBlock.title.Js}/>
					<MySkillsBlock image={MyInfoForBlock.image.Redux} text={MyInfoForBlock.text.TextForReact} title={MyInfoForBlock.title.Redux}/>
				</div>
			</div>
		</div>
	)
}