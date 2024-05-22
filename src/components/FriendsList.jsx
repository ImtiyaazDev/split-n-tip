import { useSelector } from "react-redux";

import Friend from "./Friend";

export default function FriendsList() {
	const users = useSelector((store) => store.bill.users);

	return (
		<ul>
			{users.map((user) => (
				<Friend
					key={user.name}
					name={user.name}
					amount={user.amount}
				/>
			))}
		</ul>
	);
}
