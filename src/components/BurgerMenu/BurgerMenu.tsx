import React, {useState} from "react";
import s from "./BurgerMenu.module.css";
import {NavLink} from "react-router-dom";





export const BurgerMenu = () => {
	const [burger,setBurger] = useState<boolean>(false)
	const changeBarTop = burger ? `${s.openedBarTop} ${s.barTop}` : s.barTop
	const changeBarMid = burger ? `${s.openedBarMid} ${s.barMid}` : s.barMid
	const changeBarBot = burger ? `${s.openedBarBot} ${s.barBot}` : s.barBot
	const burgerOnClick = () => {
		setBurger(!burger)
	}
	return (
		<nav className={s.navBurger}>
			<button onClick={burgerOnClick} className={s.navToggle}>
				<span className={changeBarTop}></span>
				<span className={changeBarMid}></span>
				<span className={changeBarBot}></span>
			</button>
			{burger &&
			<div className={s.menu}>
					<NavLink to={'/main'} activeClassName={s.active} className={s.link}>Main</NavLink>
					<NavLink to={'/skills'} activeClassName={s.active} className={s.link}>Skills</NavLink>
					<NavLink to={'/works'} activeClassName={s.active} className={s.link}>Works</NavLink>
					<NavLink to={'/contacts'} activeClassName={s.active} className={s.link}>Contacts</NavLink>
			</div>
			}
		</nav>
	)
}