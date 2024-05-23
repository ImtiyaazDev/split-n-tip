import { useSelector } from "react-redux";

import Friend from "./Friend";

export default function FriendsList() {
	const users = useSelector((store) => store.bill.users);

	return (
		<ul className="scrollbar | max-h-56 overflow-y-auto md:max-h-80">
			{users.map((user) => (
				<Friend
					key={user.id}
					name={user.name}
					amount={user.amount}
				/>
			))}
		</ul>
	);
}
