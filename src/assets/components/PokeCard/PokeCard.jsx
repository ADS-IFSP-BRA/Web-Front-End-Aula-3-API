import styles from "./PokeCards.module.css";

function PokeCard({ pokemon , capture }) {
  const typeIcons = {
    normal: "⚪",
    fire: "🔥",
    water: "💧",
    electric: "⚡",
    grass: "🌿",
    ice: "❄️",
    fighting: "🥊",
    poison: "☠️",
    ground: "🌎",
    flying: "🕊️",
    psychic: "🔮",
    bug: "🐛",
    rock: "🪨",
    ghost: "👻",
    dragon: "🐉",
    dark: "🌑",
    steel: "⚙️",
    fairy: "✨",
  };

  const typeColors = {
    normal: "#A8A77A",
    fire: "#ee8230",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#79c74c",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#a33ea183",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const name = `${pokemon.name}`.toLocaleUpperCase()

  const type = pokemon.types[0].type.name;
  const color = typeColors[type];
  const icon = typeIcons[type];

  return (
    <>
      <div className={styles.card} style={{ border: "solid 4px " + color }}>
        <h4>#{pokemon.id}</h4>
        <div className={styles.picture}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            // Gambiarra para pegar a imagem do pokemon, pois css não aceita "-" na propriedade other.official-artwork
            className={styles.pokemonPicture}
            alt="Foto Pokemon"
          />
        </div>
        <b><p>{name}</p></b>
        <h2>
            {icon}
        </h2>
            <button onClick={()=>{capture(pokemon)}}>
                <b>CATCH</b>
            </button>
      </div>
    </>
  );
}

export default PokeCard;
