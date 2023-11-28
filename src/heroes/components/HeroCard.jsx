import { Link } from "react-router-dom";

// Aqui estamos creando un mini componente
const CharactesByHero = ({alter_ego , characters}) =>{
    if (alter_ego === characters) return (<></>);

    return <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {

    // const charactesByHero = (<p>{characters}</p>) 
    //De esta manera estamos creanco una constante con valor JSX

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col animate__animated animated__fadeIn">
        <div className="card"> 
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-tittle">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        {/* {
                            (alter_ego !== characters) && charactesByHero
                        } */}

                        <CharactesByHero characters={characters} alter_ego={alter_ego}/>

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
