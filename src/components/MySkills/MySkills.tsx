import React, {useEffect, useState} from "react";
import {MySkillsBlock} from "./MySkillsBlock";
import s from './MySkills.module.css'
import c from '../../App.module.css'
// import AOS from "aos";

export type ArrayBlockType = {
	title:string
	image:string
	text:string
}

export const MySkills = () => {
	const [myInfoForBlock, setMyInfoForBlock] = useState<Array<ArrayBlockType>>([
		{title: 'React', image:'https://ru.reactjs.org/logo-og.png',text:'My knowledge and experience'},
		{title: 'Js', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wl1yHDBVvICGOC3vW4ZQAoTnNwoipyR1Wg&usqp=CAU',text:'My knowledge and experience'},
		{title: 'Redux', image:'https://miro.medium.com/max/800/1*ZxmcaOzul181U6BT5z-Ipw.png',text:'My knowledge and experience'},
	])
	useEffect(() => {
		// AOS.init({duration:1000})
	},[])


	return (
		<div className={s.mySkillsWrapper}>
			<div className={c.container}>
				<div className={s.mySkillsContainer}>
					<h2>My skills</h2>
				</div>
				<div className={s.wrapperForBlock}>
					{myInfoForBlock.map((el,i) =>
						<MySkillsBlock text={el.text} title={el.title} image={el.image} key={i}/>
					)}
				</div>
			</div>
		</div>
	)
}