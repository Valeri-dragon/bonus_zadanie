const renderHeroes = (heroes) => {
  const main = document.querySelector("main");
  const heroConteiner = document.createElement("div");

  heroConteiner.setAttribute("id", "heroe-conteiner");

  main.innerHTML = "";
  heroConteiner.innerHTML = "";
  heroes.forEach((heroe) => {
    const heroeBlock = document.createElement("div");

    const {
      name,
      realName,
      species,
      citizenship,
      gender,
      birthDay,
      deathDay,
      status,
      actors,
      photo,
      movies,
    } = heroe;

    let arr = [];

    const renderMovies = () => {
      if (movies) {
        movies.forEach((item) => {
          if (item) {
            arr.push(`<span>${item}</span>`);
          }
        });
      }
    };

    renderMovies();

    heroeBlock.classList.add("block-card");
    heroeBlock.innerHTML = `
      <div class="heroes-card">
     <div class="row">
              <img src="db/${photo}"  alt="${name}" class="heroe-image"/>
               <div class="column">
              <h3>${name}</h3>
               <p><span class="descrip">real name: </span> ${
                 realName ? realName : "no data available"
               }</p>
               <p><span class="descrip">species: </span> ${
                 species ? species : "no data available"
               }</p>
              <p><span class="descrip">citizenship: </span> ${
                citizenship ? citizenship : "no data available"
              }</p>
             <p><span class="descrip">gender: </span> ${
               gender ? gender : "no data available"
             }</p>
             <p><span class="descrip">birth day: </span> ${
               birthDay ? birthDay : "no data available"
             }</p>
             <p><span class="descrip">deat day: </span> ${
               deathDay ? deathDay : "no data available"
             }</p>
             <p><span class="descrip">status: </span>${
               status ? status : "no data available"
             }</p>
              </div>
              </div>
              
             <p><span class="descrip">actors: </span> ${
               actors ? actors : "no data available"
             }</p>
           <p class="column"><span class="descrip">movies: </span> ${arr.join(
             ""
           )}</p>
            </div>

      `;
    heroConteiner.append(heroeBlock);
    main.append(heroConteiner);
  });
};
export default renderHeroes;
