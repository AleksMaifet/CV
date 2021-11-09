import React from "react";
import {Button} from "../Button/Button";
import c from "../../App.module.css";
import s from './RemoteWork.module.css'


export const RemoteWork = () => {
	return (
		<React.Fragment>
			<div className={s.wrapperForBlockContainer}>
				<div className={c.container}>
					<div className={s.wrapperContainer}>
						<div>
							<h2>Considering options for remote work</h2>
						</div>
						<Button buttonValue={'Hire me'}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}