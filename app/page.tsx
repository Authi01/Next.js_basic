import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hola </h1>
      <Link href="/users"> Users List Page </Link>
      <Link href="/homepage"> Homepage</Link>
    </main>
  );
}
