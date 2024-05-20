import Header from "./Header";

export default function AppLayout() {
	return (
		<div className="grid h-screen w-screen grid-cols-6 grid-rows-[6rem_1fr] place-items-center p-5 bg-stone-100">
			<Header />
		</div>
	);
}
