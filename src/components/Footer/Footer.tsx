import React, {useMemo} from "react";
import c from "../../App.module.css";
import s from "./Footer.module.css"









export const Footer = () => {



	const divBlock = useMemo(() => {
		const divArray = [];
		for(let i = 0; i < 4;i++){
			divArray.push(i)
		}
		return divArray
	},[])





	return (
		<React.Fragment>
			<div className={s.wrapperFooter}>
				<div  className={c.container}>
					<div className={s.containerFooter}>
						<h3>Aleks Maifet</h3>
						<div className={s.wrapperIdentification}>
							<div className={s.identification}>
								{divBlock.map((el,i) => <div key={i} className={s.identificationBlock}></div>)}
							</div>
						</div>
						<div>© 2021</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}