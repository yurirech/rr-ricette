import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import uStyles from "../styles/utils.module.scss";
import Search from "../public/icon/search.svg";
import Down from "../public/icon/south.svg";
import MenuBar from "../components/menu-bar/menu-bar";
import "animate.css";
import CategoryAvatar from "../components/category-avatar/category-avatar";
import RecipeCard from "../components/recipe-card/recipe-card";

export default function Home() {
	return (
		<div>
			<section className={styles.hero}>
				<div className={uStyles.overlay}></div>
				<div className={styles.heroBg}>
					<Image
						src="/img/hero-1.jpg"
						objectPosition="0 54%"
						objectFit="cover"
						layout="fill"
					/>
				</div>
				<div className={styles.content}>
					<h1>Trovi delle Ricette</h1>
					<form>
						<input type="text" />
						<div className={styles.searchIcon}>
							<Search width="30" height="30" fill="#00000094" />
						</div>
					</form>
					<div className={styles.scroll}>
						<small>scroll down</small>
						<Down
							width={21}
							height={21}
							fill="white"
							className="animate__animated animate__shakeY animate__slow animate__repeat-2"
						/>
					</div> 
				</div>
			</section>
			<section className={styles.typeOfFood}>
				<div className={uStyles.container}>
					<p>QUAL È LA TUA PREFERITA?</p>
					<h3>Scegli tra nostre categorie:</h3>
					<div className={styles.categories}>
						<CategoryAvatar title="Salate" background="/img/salate.jpg" />
						<CategoryAvatar title="Dolce" background="/img/dolce.jpg" />
						<CategoryAvatar title="Sane" background="/img/sane.jpg" />
						<CategoryAvatar title="Tutte" background="/img/tutte.jpg" />
					</div>
				</div>
				<span className={uStyles.divider}></span>
			</section>
			<section className={styles.homeRecipes}>
				<div className={uStyles.container}>
					{/* <h3>Scegli tra le ultime ricette aggiunte:</h3> */}
					<h5>Oppure scegli tra le ultime aggiunte:</h5>
					<div className={styles.latestRecipes}>
						<div className={`${styles.item} ${styles.item1}`}>
							<RecipeCard
								title="Pollo al vento"
								time="20"
								calories="115"
								image="/img/dolce.jpg"
							/>
						</div>
						<div className={`${styles.item} ${styles.item2}`}>
							<RecipeCard
								title="Pollo al vento"
								time="20"
								calories="115"
								image="/img/salate.jpg"
							/>
						</div> 
						<div className={`${styles.item} ${styles.item3}`}>
							<RecipeCard
								title="Pollo al vento"
								time="20"
								calories="115"
								image="/img/dolce.jpg"
							/>
						</div>
						<div className={`${styles.item} ${styles.item4}`}>
							<RecipeCard
								title="Pollo al vento"
								time="20"
								calories="115"
								image="/img/dolce.jpg"
							/>
						</div>
						<div className={`${styles.item} ${styles.item5}`}>
							<RecipeCard
								title="Pollo al vento"
								time="20"
								calories="115"
								image="/img/dolce.jpg"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
