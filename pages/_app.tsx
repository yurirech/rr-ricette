import "../styles/globals.scss";
import { AppProps } from "next/app";
import MenuBar from "../components/menu-bar/menu-bar";
import Footer from "../components/footer/footer";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MenuBar />
			<Component {...pageProps} />
      <Footer />
		</>
	);
}

export default App;
