export default function Button({ type, onClick, children }) {
	const base =
		"rounded-full px-6 py-3 text-lg font-bold outline-none transition-colors duration-300 focus:ring-2 focus:ring-offset-2";

	const styles = {
		primary: `${base} bg-violet-500 text-violet-100 hover:bg-violet-600 focus:ring-violet-500`,
		secondary: `${base} bg-violet-200 text-violet-700 hover:bg-violet-500 hover:text-violet-100 focus:ring-violet-600`
	};

	return <button className={styles[type]}>{children}</button>;
}