export default function Button({ type, onClick, children }) {
	return (
		<button className="rounded-full bg-violet-500 px-6 py-3 font-bold text-violet-100 outline-none">
			{children}
		</button>
	);
}
