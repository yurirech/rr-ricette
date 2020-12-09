import Image from "next/image";
import style from "./recipe-card.module.scss";

interface RecipeCard {
	image?: string;
	title: string;
	time?: string;
	calories?: string;
}

const RecipeCard = ({ image, title, time, calories }: RecipeCard) => {
	return (
		<>
			<div className={style.card}>
				<div className={style.imageHolder}>
					<Image src={image} layout="fill" objectFit="cover" />
				</div>
				<div className={style.cardBottom}>
					<h4>{title}</h4>
					<div className={style.info}>
						<h5>{time}min</h5>
						<h5> {calories}kcal</h5>
					</div>
					<div className={style.cookNow}>
						<small>COOK THIS NOW</small>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipeCard;
