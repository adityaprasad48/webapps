import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul className="list-none p-0 center">
      {data.map((user) => (
      <li
        key={user.id}
        className="p-2 my-1 bg-gray-100 border border-gray-300 rounded w-100"
      >
        {user.name}
      </li>
      ))}
    </ul>
  );
}
