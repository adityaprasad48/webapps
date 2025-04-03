import { useMutation, useQueryClient } from "@tanstack/react-query";

const addUser = async (user) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

export default function AddUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Refetch users after adding
    },
  });

  return (
    <button
      onClick={() => mutation.mutate({ name: "New User" })}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-lg"
    >
      Add User
    </button>
  );
}
