import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
	return (
		<div className="grid h-screen w-screen grid-cols-6 grid-rows-[auto_1fr_auto] place-items-center overflow-y-auto bg-stone-100 p-5 md:px-14 md:py-10 gap-y-4">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
