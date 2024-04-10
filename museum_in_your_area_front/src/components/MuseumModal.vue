

<template>
  <dialog id="museumModal" class="modal">
    <div class="modal-box w-11/12 max-w-6xl">
      <div
        id="modalTitleDiv"
        class=""
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <h1 id="modalTitle" class="text-3xl font-bold">
          musée national de l'automobile - collection Schlumpf
        </h1>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <img src="../assets/x-black.svg" alt="" />
          </button>
        </form>
      </div>
      <hr />
      <div id="modalBody">
        <div class="container modalBodyPart">
          <img src="../assets/MIYA-no-background.png" style="border-radius: 10%" class="mb-5" />
          <div class="container mb-5">
            <div>
              <h2 id="modalThemesTitle" class="text-2xl mb-2">Domaines thématiques :</h2>
              <hr />
              <br />
              <ul id="modalThemes" class="list-disc ml-10">
                <li>Technique et industrie</li>
              </ul>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalAtoutsTitle" class="text-2xl mb-2">Atouts :</h2>
            <hr />
            <br />
            <div id="modalAtouts" class="scrollable-container">
              <p>
                Importante collection automobile couvrant 120 marques et l'histoire de l'automobile
                européenne de 1878 à nos jours. Plusieurs espaces lèvent le voile sur la vie des
                collections, sur les problématiques de conservation ou encore sur l'évolution de la
                mécanique. Une piste d’évolution permet à la Cité de l’Automobile de passer de 4 à 8
                hectares et introduit dans ce complexe muséal, un théâtre de plein air. Les voitures
                reprennent leur mouvement pour le plaisir des visiteurs et des collectionneurs. Elle
                peut accueillir 4.500 personnes dans ses gradins. Elle propose également un paddock
                non couvert dans lequel jusqu’à 30 voitures peuvent stationner ainsi qu’un clubhouse
                équipé d’un garage pour recevoir les clubs et permettre de travailler sur les
                véhicules. Ses trois anneaux permettent de proposer des spectacles et animations
                autour de l’automobile ainsi que des défilés des voitures les plus prestigieuses du
                Musée. Elle est également un lieu d’accueil pour les différents clubs et
                associations de collectionneurs de voitures.
              </p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalArtistsTitle" class="text-2xl mb-2">Artistes :</h2>
            <hr />
            <br />
            <div id="modalArtists" class="scrollable-container">
              <p>Non communiqués</p>
            </div>
          </div>
          <div class="container mb-5">
            <div>
              <h2 id="modalMoreInfos" class="text-2xl mb-2">Informations complémenaires:</h2>
              <hr />
              <br />
              <span id="modalSpaceProtectionTitle" class="font-semibold">Protection espace : </span>
              <span id="modalSpaceProtection">Site patrimonial remarquable.</span>
              <br />
              <span id="modalCoordinatesTitle" class="font-semibold">Coordonées GPS : </span>
              <span id="modalCoordinates"
                ><a
                  href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                  >47.76161416701042, 7.327893525261629</a
                ></span
              >
              <br />
              <span id="modalUpdateDateTitle" class="font-semibold"
                >Date de mise à jour des données :
              </span>
              <span id="modalUpdateDate">25/01/2024</span>
            </div>
          </div>
        </div>
        <div class="container modalBodyPart">
          <div class="container mb-5">
            <div>
              <h2 id="modalInfoTitle" class="text-2xl mb-2">Informations générales:</h2>
              <hr />
              <br />
              <span id="modalNameTitle" class="font-semibold">Nom officiel : </span>
              <span id="modalName">Musée national de l'automobile - Collection Schlumpf</span>
              <br />
              <span id="modalAdresseTitle" class="font-semibold">Adresse : </span>
              <span id="modalAdresse"
                ><a
                  id="modalAdresseUrl"
                  href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                  >192 avenue de Colmar, 98051, Mulhouse</a
                ></span
              >
              <br />
              <span id="modalWebsiteTitle" class="font-semibold">Site Web : </span>
              <span id="modalWebsite"
                ><a
                  id="modalWebsiteUrl"
                  href="www.citedelautomobile.com/"
                  class="text-blue-400 hover:text-blue-800 hover:underline"
                  >www.citedelautomobile.com/</a
                ></span
              >
              <br />
              <span id="modalPhoneTitle" class="font-semibold">Téléphone : </span>
              <span id="modalPhone">03 89 33 23 23</span>
              <br />
              <span id="modalCreationYearTitle" class="font-semibold">Année de création : </span>
              <span id="modalCreationYear">Non communiquée</span>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="ModalHistoryTitle" class="text-2xl mb-2">Histoire :</h2>
            <hr />
            <br />
            <div id="modalHistory" class="scrollable-container">
              <p>
                Le musée conserve la collection des frères Schlumpf (environ 480 pièces dont 422 ont
                été classées au titre des Monuments historiques), constituée entre 1961 et 1963.
                Pour effectuer ces achats, Fritz Schlumpf noue une série de contacts avec des «
                rabatteurs » en France, en Suisse, en Angleterre, en Italie, en Allemagne et aux
                Etats-Unis. Le riche industriel achète sans répit les voitures européennes de la
                haute époque en refusant les modèles américains. Dans les années 1970, la crise
                textile frappe les entreprises Schlumpf et les deux frères sont contraints de
                déposert le bilan. En 1981, l'Association du Musée national de l'Automobile – qui
                regroupe la ville de Mulhouse, le Département du Haut-Rhin, la Région Alsace, la
                Chambre de Commerce et d'Industrie de Mulhouse, l'Automobile Club de France, la
                Société Panhard et le Comité du salon de l'Automobile – rachète la collection pour
                44 millions de francs, rachat autorisé par la Cour de cassation l’année précédente.
                Le 10 juillet 1982, le Musée national de l’Automobile ouvre au public. En 1989,
                suite à des arrêts de la Cour d'appel de Paris, le Musée national de l'Automobile
                est contraint d'ajouter « Collection Schlumpf » à son nom et sur tous les documents
                mentionnant un élément de la collection. De nouvelles pièces ont été acquises,
                données ou prêtées depuis 1982.
              </p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalKeyCharactersTitle" class="text-2xl mb-2">Personnages Phares :</h2>
            <hr />
            <br />
            <div id="modalKeyCharacters" class="scrollable-container">
              <p>Hans et Fritz Schlumpf, Ettore et Jean Bugatti</p>
            </div>
          </div>
          <div class="container mb-5">
            <h2 id="modalInterestsTitle" class="text-2xl mb-2">Intêrets :</h2>
            <hr />
            <br />
            <div id="modalInterests" class="scrollable-container">
              <p>
                Le musée est installé dans une ancienne filature construite en 1880. L'accès à
                l'imposante entrée de la Cité de l'Automobile se fait grâce à une passerelle
                enjambant le canal. Cet espace a été conçu par le Studio Milou en 2006 lors de la
                création des nouveaux espaces d'accueil et de découverte. Il symbolise la création
                et l'imagination humaine, particulièrement fertiles dans le domaine de l'automobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modalBodyPart {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

#modalBody {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}

.scrollable-container {
  max-height: 200px;
  border: 3px solid #e8e8e8;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;
}
</style>
