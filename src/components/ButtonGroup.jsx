import { useDispatch } from "react-redux";
import { toggleModal } from "../slices/modalSlice";
import { addUser } from "../slices/billSlice";
import Button from "./Button";

export default function ButtonGroup() {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleModal(true));
		dispatch(addUser());
	};

	return (
		<div className="relative row-start-1 row-end-1 flex items-start justify-between">
			<Button
				type="primary"
				onClick={handleClick}
			>
				Add Payee
			</Button>
			<Button type="secondary">New Bill</Button>
		</div>
	);
}
