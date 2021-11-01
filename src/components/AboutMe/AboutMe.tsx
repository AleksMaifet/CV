import React from "react";
import s from './AboutMe.module.css'
import c from '../../App.module.css'


export const AboutMe = () => {
	return (
		<div className={s.blockFirst}>
			<div className={c.container}>
				<div className={s.itemContainer}>
					<div className={s.text}>
						<h2>
							Hello!
						</h2>
						<p>
							My name is Aleksei Maifet and i im front-end developer.
						</p>
					</div>
					<div className={s.imgContainer}>
						<img
							src={'https://sun9-88.userapi.com/impf/c307201/v307201815/e13f/VmhuXZnPHSU.jpg?size=453x604&quality=96&sign=9091e61034cad0f7a7514dfc86326d24&type=album'}/>
					</div>
				</div>
			</div>
		</div>
	)
}