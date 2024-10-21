import { GetServerSideProps } from "next";

interface CharacterDetailProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    origin: {
      name: string;
    };
    image: string;
  };
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  return (
    <div className="container">
      <img
        src={character.image}
        alt={character.name}
        width="192"
        height="192"
      />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Origem: {character.origin.name}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params?.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};
