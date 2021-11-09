import React from "react";
import s from './header.module.css'
import c from '../../App.module.css'
import {NavLink, withRouter} from "react-router-dom";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";


export const Header = withRouter((props) => {

	return (
		<div className={s.header}>
			<div className={c.container}>
				<nav className={s.navList}>
					<ul className={s.ulList}>
						<li className={s.navItem}>
							<NavLink to={'/main'}>Main</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to={'/skills'}>Skills</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to={'/works'}>Works</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to={'/contacts'}>Contacts</NavLink>
						</li>
					</ul>
				<BurgerMenu/>
				</nav>
			</div>
		</div>
	)
})

