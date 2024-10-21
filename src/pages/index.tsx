import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Rick and Morty App</h1>
      <Link href="/list" legacyBehavior>
        <button className="home-button">Ver Personagens</button>
      </Link>
    </div>
  );
}
