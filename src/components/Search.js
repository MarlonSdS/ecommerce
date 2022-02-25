import { useParams } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import limitarTitulo from "../services/substr";


export default function Search(){
    const {terms} = useParams()
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    document.title = `Resultados da busca por ${terms}`

useEffect(() => {
    async function loadApi(){
        const response = await api.get(`search?q=${terms}`).then(response => {
            setResults(response.data.results)

            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
        
    }

    loadApi()
})

    if(loading){
        return (
            <Loading />
        )
    }

    return(

        <div className='main'>
                {results.map(result => (
                    <div className="homeContent" key={result.id}>
                       <a href={result.permalink}>
                            <img src={result.thumbnail}/>
                            <div>
                                <h1>{limitarTitulo(result.title)}</h1>
                                <h2>R${result.price}</h2>
                            </div>

                       </a>
                    </div>
                ))}
            
        </div>

    )
   
}