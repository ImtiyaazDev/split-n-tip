export default function Heading({ type, children }) {
	if (type === "h2") {
		return <h2 className="font-heading text-2xl text-stone-700">{children}</h2>;
	}

	return (
		<h1 className="animate-glow font-heading text-4xl text-violet-500">
			{children}
		</h1>
	);
}
