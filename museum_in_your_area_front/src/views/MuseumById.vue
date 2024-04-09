<template>
  <div id="museumByIdDiv">
    <button class="btn btn-success" onclick="my_modal_4.showModal()">Couscous</button>
    <dialog id="my_modal_4" class="modal">
      <div class="modal-box w-11/12 max-w-6xl">
        <div
          id="modalTitle"
          class=""
          style="display: flex; flex-direction: row; justify-content: space-between"
        >
          <h1 class="text-3xl font-bold">Musée national de l'automobile - Collection Schlumpf</h1>
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <img src="../assets/x-black.svg" alt="" />
            </button>
          </form>
        </div>
        <hr />
        <div id="modalBody">
          <div class="container modalBodyPart">
            <img src="../assets/collection-schlumpf.jpg" style="border-radius: 10%" class="mb-2" />
            <div>
              <div class="container">
                <div>
                  <h2 class="text-2xl mb-2">Informations générales:</h2>
                  <hr />
                  <br />
                  <span class="font-semibold">Nom officiel : </span>
                  <span>Musée national de l'automobile - Collection Schlumpf</span>
                  <br />
                  <span class="font-semibold">Adresse : </span>
                  <span
                    ><a
                      href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                      class="text-blue-400 hover:text-blue-800 hover:underline"
                      >192 avenue de Colmar, 98051, Mulhouse</a
                    ></span
                  >
                  <br />
                  <span class="font-semibold">Site Web : </span>
                  <span
                    ><a
                      href="www.citedelautomobile.com/"
                      class="text-blue-400 hover:text-blue-800 hover:underline"
                      >www.citedelautomobile.com/</a
                    ></span
                  >
                  <br />
                  <span class="font-semibold">Téléphone : </span>
                  <span>03 89 33 23 23</span>
                </div>
              </div>
            </div>
          </div>
          <div class="container modalBodyPart">
            <div class="container">
              <div>
                <h2 class="text-2xl mb-2">Informations générales:</h2>
                <hr />
                <br />
                <span class="font-semibold">Nom officiel : </span>
                <span>Musée national de l'automobile - Collection Schlumpf</span>
                <br />
                <span class="font-semibold">Adresse : </span>
                <span
                  ><a
                    href="https://www.google.com/maps/place/192+Av.+de+Colmar,+68100+Mulhouse/@47.7613355,7.3252663,17z/data=!3m1!4b1!4m6!3m5!1s0x47919b643619ac3f:0xb4140a1f056c5d5b!8m2!3d47.7613355!4d7.3278466!16s%2Fg%2F11c24x395q?entry=ttu"
                    class="text-blue-400 hover:text-blue-800 hover:underline"
                    >192 avenue de Colmar, 98051, Mulhouse</a
                  ></span
                >
                <br />
                <span class="font-semibold">Site Web : </span>
                <span
                  ><a
                    href="www.citedelautomobile.com/"
                    class="text-blue-400 hover:text-blue-800 hover:underline"
                    >www.citedelautomobile.com/</a
                  ></span
                >
                <br />
                <span class="font-semibold">Téléphone : </span>
                <span>03 89 33 23 23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
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
</style>
