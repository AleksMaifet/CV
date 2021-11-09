import React, {useEffect, useState} from "react";
import s from './AboutMe.module.css'
import c from '../../App.module.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export const AboutMe = () => {
	const [scroll,setScroll] = useState<boolean>(false)

	useEffect(() => {
	const animItems = document.querySelectorAll('[datatype="animeItem"]');

	if(animItems.length > 0){
		const animOnScroll  = () => {
			for(let i = 0;i < animItems.length;i++){
				const animItem = animItems[i];
				const animItemHeight =  animItem instanceof HTMLElement && animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;
				//@ts-ignore
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if(animItemHeight > window.innerHeight)  {
					animItemPoint = window.innerHeight - window.innerHeight / animStart
				}

				(window.scrollY > animItemOffset - animItemPoint ) && window.scrollY < (animItemOffset + animItemHeight)
					? setScroll(true)
					: setScroll(false)
			}
		}
		const offset = (el: any) => {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.scrollX | document.documentElement.scrollLeft,
				scrollTop = window.scrollY | document.documentElement.scrollTop;
			return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
		window.addEventListener('scroll', animOnScroll)
		animOnScroll()
	}
	}, [])

	const scrollTextStyle = !scroll ? s.text : s.activeText
	const scrollImageStyle = !scroll ? s.imgContainer : s.activeImgContainer

	return (
		<div className={s.blockFirst} datatype='animeItem'>
			<div className={c.container}>
				<div className={s.itemContainer}>
					<div className={scrollTextStyle}>
						<h2>
							Hello!
						</h2>
						<p>
							My name is Aleksei Maifet and i im front-end developer.
						</p>
					</div>
					<div className={scrollImageStyle}>
						<img
							src={'https://sun9-88.userapi.com/impf/c307201/v307201815/e13f/VmhuXZnPHSU.jpg?size=453x604&quality=96&sign=9091e61034cad0f7a7514dfc86326d24&type=album'}/>
					</div>
				</div>
			</div>
		</div>
	)
}