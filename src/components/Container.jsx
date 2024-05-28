export default function Container({ size, spacer, children }) {
	if (size === "lg")
		return (
			<div
				className={`flex flex-col gap-4 md:flex md:grow md:flex-col md:gap-4 ${spacer !== "" ? spacer : ""}`}
			>
				{children}
			</div>
		);

	if (size === "md")
		return (
			<div className="flex items-center justify-between gap-7">{children}</div>
		);

	return <div className="flex flex-col gap-4">{children}</div>;
}
