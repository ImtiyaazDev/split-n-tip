import Button from "./Button";

export default function ButtonGroup() {
	return (
		<div className="row-start-1 row-end-1 flex items-start justify-between relative">
			<Button type="primary">Add Payee</Button>
			<Button type="secondary">New Bill</Button>
		</div>
	);
}
