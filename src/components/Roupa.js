import { useEffect, useState } from "react"
import api from "../services/api"
import limitarTitulo from '../services/substr'
import Loading from "./Loading";
import setTitle from "../services/title";
setTitle()

export default function Roupa(){ 
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadApi(){
            const response = await api.get('search?category=MLB1430').then(response => {
                setResults(response.data.results)
                //console.log(results)
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
                        <div className="clothContent" key={result.id}>
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