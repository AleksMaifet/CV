import React, {useCallback, useState} from "react";
import c from "../../App.module.css";
import s from "./Contacts.module.css"
import {Button} from "../Button/Button";


export const Contacts = () => {
	const [firstInput, setFirstInput] = useState<string>('')
	const [secondInput, setSecondInput] = useState<string>('')
	const [textArea, setTextArea] = useState<string>('')

	const InputHandler = useCallback(() => {
		setFirstInput('')
		setSecondInput('')
		setTextArea('')
	},[])

	return (
		<React.Fragment>
			<div className={s.wrapperContacts}>
				<div className={c.container}>
					<div className={s.containerContacts}>
						<h2>Contacts</h2>
						<div>
							<form className={s.formContacts}>
								<div>
									<input value={firstInput} onChange={(e) => {setFirstInput(e.currentTarget.value)}} className={s.inputContact}/>
								</div>
								<div className={s.secondDivInput}>
									<input value={secondInput} onChange={(e) => {setSecondInput(e.currentTarget.value)}} className={s.inputContact}/>
								</div>
								<div>
									<textarea value={textArea} onChange={(e) => {setTextArea(e.currentTarget.value)}} className={s.textAreaContact}/>
								</div>
							</form>
						</div>
						<Button buttonValue={'Send'} callback={InputHandler}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}