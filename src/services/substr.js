export default function limitarTitulo(titulo){
    var novoTitulo = ''

    if(titulo.length > 50){
        novoTitulo = titulo.substr(0, 50)
        novoTitulo = novoTitulo + '...'
    }else{
        novoTitulo = titulo
    }

    return novoTitulo

}