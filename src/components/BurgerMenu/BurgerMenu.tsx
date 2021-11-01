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
				<NavLink to={'/main'} className={s.active}>Main</NavLink>
				<NavLink to={'/skills'} className={s.active}>Skills</NavLink>
				<NavLink to={'/works'} className={s.active}>Works</NavLink>
			</div>
			}
		</nav>
	)
}