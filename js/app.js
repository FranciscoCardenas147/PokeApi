

const getRandomint = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(getRandomint(1, 150))

document.addEventListener('DOMContentLoaded', () => {

    const random = getRandomint(1, 150)

    fetchData(random)
})




const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            especial: data.stats[3].base_stat,
            defensa: data.stats[2].base_stat,
            tipo: data.types[0].type.name

        }


        console.log(data)
        console.log(pokemon.tipo)
        pintarCard(pokemon)

    }
    catch (error) {
        console.log(error)
    }
}

const pintarCard = (pokemon) => {
    // console.log(pokemon)

    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-type').textContent = `${pokemon.tipo.toUpperCase()}`;
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>hp${pokemon.hp}</span></br> <span>${pokemon.tipo}</span>`
    clone.querySelector('.card-body-text').textContent = `${pokemon.experiencia} XP`
    

    

    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + ' K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.especial + ' K'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.defensa + ' K'
    
    let body = document.querySelector('body');

    
    // body.style.backgroundImage = `url(${pokemon.img})`

    //-------------------------------CLONE.QUERYSELECTOR
    let footer = clone.querySelector('.card-footer');
    console.log(footer);
    //----------CLONE.QUERYSELECTOR
    // footer.style.borderTop = "5px solid black";
    // footer.style.borderLeft = "5px solid black";
    // footer.style.borderRight = "5px solid black";
    // footer.style.borderBottom = "10px solid black";

    switch (pokemon.tipo) {
        case "psychic":
            body.style.background = "var(--psychic)";
            footer.style.background = "var(--psychic)";
            break;
        case "normal":
            body.style.background = "var(--normal)";
            footer.style.background = "var(--normal)";
            break;
        case "rock":
            body.style.background = "var(--rock)";
            footer.style.background = "var(--rock)";
            break;
        case "grass":
            body.style.background = "var(--grass)";
            footer.style.background = "var(--grass)";
            break;
        case "fire":
            body.style.background = "var(--fire)";
            footer.style.background = "var(--fire)";
            break;
        case "water":
            body.style.background = "var(--water)";
            footer.style.background = "var(--water)";
            
            break;
        case "electric":
            body.style.background = "var(--electric)";
            footer.style.background = "var(--electric)";
            break;
        case "ice":
            body.style.background = "var(--ice)";
            footer.style.background = "var(--ice)";
            break;
        case "dragon":
            body.style.background = "var(--dragon)";
            footer.style.background = "var(--dragon)";
            break;
        case "dark":
            body.style.background = "var(--dark)";
            footer.style.background = "var(--dark)";
            break;
        case "fairy":
            body.style.background = "var(--fairy)";
            break;
        case "bug":
            body.style.background = "var(--bug)";
            break;
        case "ghost":
            body.style.background = "var(--ghost)";
            break;
        case "fighting":
            body.style.background = "var(--fighting)";
            break;
        case "poison":
            body.style.background = "var(--poison)";
            break;
        case "flying":
            body.style.background = "var(--flying)";
            break;
        case "ground":
            body.style.background = "var(--ground)";
            break;
    }


    fragment.appendChild(clone)
    flex.appendChild(fragment)




}
