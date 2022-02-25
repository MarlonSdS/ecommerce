import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import {MdSearch} from 'react-icons/md'

export default function Header(){

    const [busca, setBusca] = useState('')

    return(
        <header>
            <div>
                 <input type='text' placeholder='Pesquisar...' onChange={(e) => setBusca(e.target.value)} value={busca}/>
                 <Link to={'/search/'+ busca}><MdSearch className='lupaIcon'/></Link>
            </div>
               
        </header>
    )
}