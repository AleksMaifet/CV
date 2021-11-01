import React from "react";
import s from './Button.module.css'


type ButtonType = {
	buttonValue:string
}


export const Button = (props: ButtonType) => {
	const {buttonValue} = props
	return (
		<div className={s.containerbtn}>
			<button className={s.wrapperbtn}>
				<p className={s.subbtn}>
					{buttonValue}
				</p>
			</button>
		</div>
	)
}