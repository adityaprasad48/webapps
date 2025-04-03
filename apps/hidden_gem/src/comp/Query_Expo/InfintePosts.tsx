import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`);
  return res.json();
};

export default function InfintePosts() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return (
    <div className="p-4 space-y-4">
      {data?.pages.map((page, i) => (
        <div key={i} className="space-y-2">
          {page.map((post) => (
            <p key={post.id} className="p-2 bg-gray-100 rounded shadow">
              {post.title}
            </p>
          ))}
        </div>
      ))}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}
