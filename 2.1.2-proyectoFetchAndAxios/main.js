
const fetchBtn = document.getElementById('btnFetch');
const title = document.getElementById('title');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
    title.innerHTML = ' Rick & Morty API with Fetch'
    dataContainer.innerHTML = '';
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if(!response.ok){
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        renderCharacters(data.results);
    })
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos.'
    });
});

function renderCharacters(characters){
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <h3>${character.species}</h3>
        <h3>${character.location.name}</h3>
        <img src="${character.image}" alt="${character.name}"></img> `;
        dataContainer.appendChild(characterElement);
    });
}

const axiosBtn = document.getElementById('btnAxios');

axiosBtn.addEventListener('click', () => {
    title.innerHTML = ' Rick & Morty API with Axios'
    dataContainer.innerHTML = '';
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        const data = response.data;
        renderCharacters(data.results);
    })
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos';
    });
});