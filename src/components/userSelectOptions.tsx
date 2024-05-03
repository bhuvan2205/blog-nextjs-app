import { getUsers } from "@/db/users";

export async function UserSelectOptions({
	withAnyOption = false,
	users: providedUsers,
}: {
	withAnyOption?: boolean;
	users?: Awaited<ReturnType<typeof getUsers>>;
}) {
	const users = providedUsers ?? (await getUsers());
	return (
		<>
			{withAnyOption && <option value="">Any</option>}
			{users.map((user) => (
				<option key={user.id} value={user.id}>
					{user.name}
				</option>
			))}
		</>
	);
}
