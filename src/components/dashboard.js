import '../styles/dashboard.css'
import {Link, BrowserRouter} from 'react-router-dom'
import { useEffect } from 'react'
import {MdSmartphone, MdHome, MdLaptop, MdWatch} from 'react-icons/md'
import {FaTshirt} from 'react-icons/fa'




export default function Dashboard(){

    useEffect(() =>{
        cor()
        
    })

    return(
        <div className='panel'>
            <Link to={'/'} id={'1'} className='btDef'><MdHome />
            <span>Novidades</span></Link>
            <Link to={'/smartphones'}  id={'2'} className='btDef'><MdSmartphone />
            <span>Celulares</span></Link>
            <Link to={'/eletronicos'} id={'3'} className='btDef'><MdLaptop />
            <span>Eletrônicos</span></Link>
            <Link to={'/roupas'} id={'4'}  className='btDef'><FaTshirt />
            <span>Roupas</span></Link>
            <Link to={'/acessorios'} id={'5'}  className='btDef'><MdWatch />
            <span>Acessórios</span></Link>
        </div>
    )
}
function cor(){
    var btn1 = document.getElementById('1')
    btn1.addEventListener('click', () =>{
        cleaColors()
        btn1.classList.remove('btDef')
        btn1.classList.add('btHome')
    })
    var btn2 = document.getElementById('2')
    btn2.addEventListener('click', () =>{
        cleaColors()
        btn2.classList.remove('btDef')
        btn2.classList.add('btSmart')
    })
    var btn3 = document.getElementById('3')
    btn3.addEventListener('click', () =>{
        cleaColors()
        btn3.classList.remove('btDef')
        btn3.classList.add('btLap')
    })
    var btn4 = document.getElementById('4')
    btn4.addEventListener('click', () =>{
        cleaColors()
        btn4.classList.remove('btDef')
        btn4.classList.add('btShirt')
    })
    var btn5 = document.getElementById('5')
    btn5.addEventListener('click', () =>{
        cleaColors()
        btn5.classList.remove('btDef')
        btn5.classList.add('btWatch')
    })

    function cleaColors(){
        btn1.classList.remove('btHome')
        btn1.classList.add('btDef')
        btn2.classList.remove('btSmart')
        btn2.classList.add('btDef')
        btn3.classList.remove('btLap')
        btn3.classList.add('btDef')
        btn4.classList.remove('btShirt')
        btn4.classList.add('btDef')
        btn5.classList.remove('btWatch')
        btn5.classList.add('btDef')
    }
}

