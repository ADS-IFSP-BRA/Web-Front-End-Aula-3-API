import styles from "./App.module.css";
import Title from "./assets/img/logo.svg";
import Pokedex from "./assets/components/Pokedex/Pokedex.jsx";
import redball from "./assets/img/redball.png"
import blueball from "./assets/img/blueball.png"
import axios from "axios";
import { useEffect, useState } from "react";
 console.log(
    "Desenvolvido por : Everton Oliveira Paulino , GithHub : Everton45HH"
  )
function App() {

  const [animating, setAnimating] = useState(false);
  const [pokedex, setPokedex] = useState(null);
  const [pokeball, setPokeball] = useState(redball);
  const [time, setTime] = useState([]);
  
  useEffect(() => {
    async function fecth() {
      try {
        const response = await axios({
          method: "GET",
          url: "https://pokeapi.co/api/v2/pokemon?limit=10",
        });

        const lista = await Promise.all(
          response.data.results.map((pokemon) => axios(pokemon.url)),
        );
        lista.map((r) => r.data);

        setPokedex(lista);
      } catch (e) {
        console.log(e);
      }
    }
    fecth();
  }, []);

  function capture(pokemon) {
    setAnimating(true);
    setPokeball(blueball);
    
    setTimeout(() => {
      setAnimating(false)
      setPokeball(redball);
    }, 2100);    

    setTimeout(() => {
        setTime((prev) => [...prev, pokemon]);
      
    }, 2000);
  }
  return (
    <>
      <div className={`${styles.half} ${animating ? styles.halfAnimate : ""}`}></div>
      <div className={styles.pokedex}>
        <h1>Time Pokédex </h1>
        <div className={styles.time}>
          {
            time.map((pokemon) =>(
              <h4 key={pokemon.id}>
                {pokemon["name"].toUpperCase()}
              </h4>
            ))
          }
        </div>
      </div>
      <img
        src={pokeball}
        className={`${styles.pokebola} ${animating ? styles.shake : ""}`}
      />
      <section className={styles.center}>
        <img src={Title} className={styles.title} alt="" />
        <h1>Let's capture Pokemons!!!</h1>
        <main>
          {pokedex ? <Pokedex data={pokedex} capture={capture}/> : <p>Carregando...</p>}
        </main>
      </section>
      /
    </>
  );
}
export default App;
