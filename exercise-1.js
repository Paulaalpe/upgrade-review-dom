// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let listaUl = document.createElement('ul')
document.body.appendChild(listaUl)

for(let i=0; i<countries.length; i++){
    let elementoLista = document.createElement('li')
    listaUl.appendChild(elementoLista)
    let pais = document.createTextNode(countries[i]);
    elementoLista.appendChild(pais);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let eliminarP = document.querySelector('p.fn-remove-me')
console.log(eliminarP)
eliminarP.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo ata-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let contenedor = document.querySelector('div')
let listaUl3 = document.createElement('ul')
contenedor.appendChild(listaUl3)
for(let i=0; i < cars.length; i++){
    let elementoLista3 = document.createElement('li')
    listaUl3.appendChild(elementoLista3)
    let coche = document.createTextNode(cars[i]);
    elementoLista3.appendChild(coche);
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries4 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let country4 of countries4) {
    let contenedor4 = document.createElement('div')
    document.body.appendChild(contenedor4)
    let titulo = document.createElement('h4')
    contenedor4.appendChild(titulo)
    let hache4 = document.createTextNode(country4.title)
    titulo.appendChild(hache4)
    let imagen4 = document.createElement('img')
    contenedor4.appendChild(imagen4)
    imagen4.src = country4.imgUrl
}

