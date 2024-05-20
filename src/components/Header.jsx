import Heading from "./Heading";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className="col-span-full flex items-center gap-3">
			<Logo />
			<Heading />
		</header>
	);
}
