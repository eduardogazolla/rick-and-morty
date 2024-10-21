import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterListProps {
  characters: {
    results: Character[];
  };
  page: number;
}

export default function CharacterList({
  characters,
  page,
}: CharacterListProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(page);

  const goToPage = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/list?page=${newPage}`);
  };

  return (
    <div className="container">
      <h1>Personagens de Rick and Morty</h1>
      <div className="grid">
        {characters.results.map((character: Character) => (
          <Link
            href={`/character/${character.id}`}
            key={character.id}
            legacyBehavior
          >
            <a className="card">
              <img
                src={character.image}
                alt={character.name}
                width="128"
                height="128"
              />
              <h2>{character.name}</h2>
            </a>
          </Link>
        ))}
      </div>
      <div className="navigation">
        {currentPage > 1 && (
          <button onClick={() => goToPage(currentPage - 1)}>
            Página Anterior
          </button>
        )}
        <button onClick={() => goToPage(currentPage + 1)}>
          Próxima Página
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query.page ? Number(query.page) : 1;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const characters = await res.json();

  return {
    props: {
      characters,
      page,
    },
  };
};
