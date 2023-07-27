import { Choosen } from '../Component/Chosen.jsx'
import { PokemonList } from '../Component/PokemonList.jsx'
import { PokemonCard } from '../Component/Others.jsx'
import { ChoosenHeading, ChoosenImg, ChoosenName } from '../Component/Others.jsx'
// import { pokemon } from '../Data/pokemon.js'
import { useEffect, useState } from 'react'


export const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}






export const Page = () => {
    const [chosen, setChosen] = useState({
        title: '',
        src: ''
    })

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
        fetchPokemonData('https://pokeapi.co/api/v2/pokemon')
    }, [])

    useEffect(() => {
        setChosen(pokemonData[0])
        console.log(pokemonData)
    }, [pokemonData])

    const handleChosen = (title, src) => {
        setChosen({ title, src })
        localStorage.setItem('chosen', JSON.stringify({ title, src }))
    }

    return (
        <>
            <Choosen>
                <ChoosenHeading title="Sang Terpilih" />
                {/* <ChoosenImg src={chosen.sprites.other.dream_world.front_default} />
                <ChoosenName title={chosen.name} /> */}
            </Choosen>
            <PokemonList>
                {pokemonData.map((item) => {
                    return (
                        <PokemonCard title={item.name} src={item.sprites.other.dream_world.front_default} handleChosen={handleChosen} />
                    )
                })}
            </PokemonList>
        </>
    )
}
