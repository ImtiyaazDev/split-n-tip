import { useSelector } from "react-redux";

import { getAllUsers } from "../slices/billSlice";
import ListItem from "./ListItem";

export default function FriendsList() {
	const users = useSelector(getAllUsers);

	return (
		<ul className="scrollbar | max-h-56 overflow-y-auto md:max-h-80">
			{users.map((user) => (
				<ListItem
					key={user.id}
					name={user.name}
					amount={user.amount}
				/>
			))}
		</ul>
	);
}
