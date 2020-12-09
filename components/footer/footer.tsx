import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h4>Libro de Ricette RR</h4>
			<p>Via san paolo, 12 - Torino, Piemonte - Italia</p>
			<p>yurirechr@gmail.com</p>
			<small>© 2020 Ricette RR. All rights reserved.</small>
		</footer>
	);
};

export default Footer;
