import React, {useEffect, useState} from "react";
import s from "./MyWorks.module.css";
import c from "../../App.module.css";
import {MyWorksBlock} from "./MyWorksBlock";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export type myWorksBlockType = {
	nameOfProject:string
	descriptionOfProject:string
}

export const MyWorks = () => {
	const [myWorksBlock, setMyWorksBlock] = useState<Array<myWorksBlockType>>([
		{nameOfProject:'Name of project',descriptionOfProject:'Project description'},
		{nameOfProject:'Name of project',descriptionOfProject:'Project description'},
	])

	useEffect(() => {
		// AOS.init({duration: 1000})
	}, [])

	return (
		<div className={s.myWorksWrapper}>
			<div className={c.container}>
				<div className={s.myWorksContainer}>
					<h2>My Works</h2>
				</div>
				<div className={s.wrapperForBlock}>
					{myWorksBlock.map((el,i) =>
						<MyWorksBlock key={i} nameOfProject={el.nameOfProject} descriptionOfProject={el.descriptionOfProject}/>)}
				</div>
			</div>
		</div>
	)
}
