import { notFound } from "next/navigation";

async function getUserData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
  }
  return await res.json();
}

export default async function UserId({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  console.log(userId);
  const user = await getUserData(userId);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <span>
          UserName : <strong>{user.username}</strong>
        </span>
      </p>
      <p>
        <span>
          Address : <strong>{user.address?.city}</strong>
        </span>
      </p>
      <p>
        <span>
          Phone No. : <strong>{user.phone}</strong>
        </span>
      </p>
      <p>
        <span>
          Email : <strong>{user.email}</strong>
        </span>
      </p>
      <p>
        <span>
          Website : <strong>{user.website}</strong>
        </span>
      </p>
    </div>
  );
}
