import PokeCard from "../PokeCard/PokeCard";

function Pokedex({ data, capture }) {
  return (
    <>
      {data.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.data.id}
            pokemon={pokemon.data}
            capture={capture}
          />
        );
      })}
    </>
  );
}

export default Pokedex;
