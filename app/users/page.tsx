import Link from "next/link";

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map(({ id, name }: { id: number; name: string }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
