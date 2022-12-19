import { useEffect, useState } from "react"
import { fetchUrl } from "../Page/Homepage"
import { PokemonList } from "../Component/PokemonList"
import { Choosen } from "../Component/Chosen"
import { Link } from "react-router-dom";

const PurpleButton = ({ title, event }) => {
    return (
        <button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={() => event}> {title} </button>
    )
}

export const Location = () => {

    const [pokemonData, setPokemonData] = useState([])


    const fetchPokemonData = async (url) => {
        const list = await fetchUrl(url)
        const result = await Promise.all(list.results.map(async (item) => {
            const pokemon = await fetchUrl(item.url)
            return pokemon
        }
        ))
        setPokemonData(result)
    }
    useEffect(() => {
        fetchPokemonData('https://pokeapi.co/api/v2/location-area')
    }, [])

    useEffect(() => {
        console.log(pokemonData)
    }, [pokemonData])

    return (
        <>
            <PokemonList>
                {pokemonData.map((item, index) => {
                    return (
                        <Choosen>
                            <Link to={item.id} key={index}>
                                <PurpleButton title={item.name} />
                            </Link>
                        </Choosen>
                    )
                })}
            </PokemonList>
        </>
    );
}