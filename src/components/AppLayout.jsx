import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function AppLayout() {
	return (
		<div className="grid h-screen w-screen grid-cols-6 grid-rows-[6rem_1fr_4rem] place-items-center overflow-y-auto bg-stone-100 p-5 md:px-14 md:py-10">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
