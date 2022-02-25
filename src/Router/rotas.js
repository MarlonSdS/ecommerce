import {Route, Router, Routes} from 'react-router-dom'
import Acessorio from '../components/Acessorio'
import Eletronicos from '../components/Eletronicos'
import Roupa from '../components/Roupa'
import Smartphone from '../components/Smartphone'
import Home from '../components/Home'
import Search from '../components/Search'

export default function Rotas(){
    return(

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/smartphones' element={<Smartphone />}/>
            <Route path='/eletronicos' element={<Eletronicos />}/>
            <Route path='/roupas' element={<Roupa />}/>
            <Route path='/acessorios' element={<Acessorio />}/>
            <Route path='search/:terms' element={<Search />}/>

        </Routes>


    )
}
