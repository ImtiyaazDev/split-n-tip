import Header from "./Header";

export default function AppLayout() {
	return (
		<div className="grid h-screen w-screen grid-cols-6 p-5 grid-rows-[6rem_1fr] place-items-center">
			<Header />
		</div>
	);
}
