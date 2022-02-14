import react, {useState, useEffect} from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import '../styles/store.css'


export default function Home(){
    const [results, setResults] = useState([])

useEffect(() => {
    async function loadApi(){
        const response = await api.get('/MLA/search?category=MLA1055').then(response => {
            setResults(response.data.results)
            //console.log(results)
        }).catch(error => {
            console.log(error)
        })
        
    }

    loadApi()
})


    return(

        <div className='main'>
                {results.map(result => (
                    <div className="homeContent" key={result.id}>
                       <a href={result.permalink}>
                            <img src={result.thumbnail}/>
                            <div>
                                <h1>{result.title}</h1>
                                <h2>R${result.price}</h2>
                            </div>

                       </a>
                    </div>
                ))}
            
        </div>

    )
}