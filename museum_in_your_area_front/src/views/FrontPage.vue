<script setup>
 
</script>

<template>
  <div id="frontPageDiv" class="centeredDiv">
    <div
      class="card pageBody bg-base-100 shadow-xl centeredDiv"
      style="margin-top: 3rem; margin-bottom: 3rem"
    >
      <div class="card-body">
        <div class="centeredDiv text-center">
          <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
          <h1 class="" style="font-size: 3rem">Bienvenue sur Museum in Your Area !</h1>
          <p>
            Plongez dans le monde fascinant de la culture et de l'histoire à portée de main. Notre
            plateforme vous invite à découvrir une multitude de musées à proximité de chez vous,
            offrant une immersion unique dans diverses périodes, cultures et disciplines
            artistiques.
          </p>
          <br />
          <p>
            Que vous soyez passionné d'art contemporain, d'histoire ancienne, de sciences naturelles
            ou de tout autre domaine, Museum in Your Area (ou MIYA pour faire court) vous permet
            d'explorer et de planifier vos visites en quelques clics seulement.
          </p>
          <br />
          <p>
            Utilisez nos filtres intelligents pour affiner votre recherche selon vos préférences :
            localisation, thématique, horaires d'ouverture et bien plus encore. Que vous soyez un
            habitué des musées ou un novice curieux, notre plateforme est conçue pour vous offrir
            une expérience sur mesure.
          </p>
          <br />
          <p>
            Que vous souhaitiez passer une après-midi enrichissante en famille, organiser une sortie
            éducative avec des amis ou simplement vous évader seul(e) au cœur de la culture, MIYA
            est votre compagnon idéal pour explorer le riche patrimoine muséal qui vous entoure.
          </p>
          <br />
          <p>
            Préparez-vous à élargir vos horizons, à nourrir votre curiosité et à créer des souvenirs
            inoubliables. Bienvenue sur MIYA, où chaque visite est une aventure à part entière.
          </p>
        </div>
        <div class="card-actions justify-center">
          <button class="btn btn-primary text-white">
            Rechercher les musées autour de moi <img src="../assets/map-marker-1-white.svg" />
          </button>
          <router-link to="/advanced-search">
            <button class="btn btn-success text-white">
              Recherche avancée <img src="../assets/search-white.svg" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div id="randomMuseums">
      <div class="card card-bordered bg-base-100 shadow-xl centeredDiv" style="margin-bottom: 3rem">
        <div class="card-body" style="display: flex; flex-direction: row; gap: 5rem">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Musée 1</h2>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Découvrir le musée !</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Musée 2</h2>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Découvrir le musée !</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/MIYA-no-background.png" style="max-width: 75%" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Musée 3</h2>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Découvrir le musée !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#frontPageDiv {
  background-color: #c5dff8;
}

.centeredDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pageBody {
  width: 65rem;
}

#randomMuseums {
  display: flex;
  flex-direction: row;
  gap: 5rem;
}
</style>
