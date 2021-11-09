import React from "react";
import s from './Button.module.css'


type ButtonType = {
	buttonValue:string
	callback?:() => void
}


export const Button = React.memo((props: ButtonType) => {
	const {buttonValue, callback} = props
	return (
		<div className={s.containerbtn}>
			<button className={s.wrapperbtn} onClick={callback}>
				<h3 className={s.subbtn}>
					{buttonValue}
				</h3>
			</button>
		</div>
	)
})