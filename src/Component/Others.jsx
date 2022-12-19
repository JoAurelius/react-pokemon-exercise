
export const PokemonCard = ({ title, src, handleChosen }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4" >
            <p className="font-bold text-xl mb-2 text-center">{title}</p>
            <img src={src} className="my-4 mx-auto h-32" alt="Pokemon Card" />
            <button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={() => handleChosen(title, src)}> Pilih Pokemon </button>
        </div>
    )
}

export const ChoosenHeading = ({ title }) => {
    return (
        <h2 className="font-bold text-xl mb-2 text-center" > {title} </h2>
    )
}

export const ChoosenImg = ({ src }) => {
    return (
        <img src={src} className="my-4 mx-auto h-64" alt="Choosen Pokemon" />
    )
}

export const ChoosenName = ({ title }) => {
    return (
        <p className="font-bold text-xl mb-2 text-center" > {title} </p>
    )
}

