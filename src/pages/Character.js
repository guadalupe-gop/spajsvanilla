import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const { image, name, episode, status, species, origin, location, gender } =
    character;

  const view = `
  <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
      </article>
      <article class="Characters-card">
            <h3 class="">Episodios:<span>${episode.length}</span></h3>
            <h3 class="">Status:<span>${status}</span></h3>
            <h3>Species:<span>${species}</span></h3>
            <h3>Gender:<span>${gender}</span></h3>
            <h3>Origin:<span>${origin.name}</span></h3>
            <h3>Last Location:${location.name}</h3>
      </article>
  </div>  
  `;
  return view;
};

export default Character;
