<template>
  <div class="about pa-4">
    <h1 class="title d-flex justify-center ma-2 mb-9">Acerca de</h1>
    <p class="developer-name">
      Nombre del desarrollardor: <br />
      <span class="name">Jose Manuel Aguilar</span>
    </p>
    <p class="blablabla">
      Si te es util esta aplicacion y quieres nuevas mejoras dejamelo saber para
      nuevas actualizaciones :)
    </p>
    <div class="media">
      <p class="media-title">Donde puedes encontrarme</p>

      <div class="media-link-cont">
        <div class="media-link-item">
          <v-icon class="media-link-icon" color="green darken-2">
            mdi-phone
          </v-icon>
          <p class="media-link-info">+5354955890</p>
        </div>
        <div class="media-link-item">
          <v-icon class="media-link-icon" color="green darken-2">
            mdi-twitter
          </v-icon>
          <p class="media-link-info">Proximamente</p>
        </div>
        <div class="media-link-item">
          <v-icon class="media-link-icon" color="green darken-2">
            mdi-linkedin
          </v-icon>
          <div>
            <a
              class="media-link-info"
              href="https://www.linkedin.com/in/jose-manuel-aguilar-ramos-841184238/"
              target="_blank"
              >https://www.linkedin.com/in/jose-manuel-aguilar-ramos-841184238/</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  color: var(--color-primary);
  .title {
    font-size: 34px !important;
  }
  .developer-name,
  .blablabla {
    padding: 1% 8%;
    text-align: center;
  }
  .name {
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 22px;
  }
  .media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4%;
    .media-title {
      font-weight: 800;
    }
    .media-link-cont {
      .media-link-item {
        display: grid;
        grid-template-columns: 40px auto;
        margin: 10px;
        .media-link-info {
          margin-left: 10px;
          margin-bottom: 0 !important;
        }
      }
    }
  }
}
</style>