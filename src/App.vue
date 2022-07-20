<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item class="d-flex justify-center">
          <v-list-item-avatar>
            <v-img src="images/user-icon.png" alt="ERR"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 d-flex justify-center"
              >{{ user }}</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon class="edit-icon" @click.stop="dialog = true"
              >mdi-pencil</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- my dialogo modal :)
      1-prop 'dialog'= decide si el modadl se abre o no es un booleano
      2-prop - es propia del compotente no se debe cambiar ):
      3-prop 'vmodel'= retorna lo q se introsuca en el dialog
      4-prop 'dialog-action' = avisa si el usuario guarda los cambios -->
      <my-dialog-component
        :dialog="dialog"
        @dialog="(val) => (dialog = val)"
        v-model="dialogUser"
        @dialog-action-btn1="changeTodoUserName(dialogUser)"
        :btn1="true"
        :btn2="true"
      >
      <template v-slot:title>Cambiar Nombre</template>
      <template v-slot:button1>Guardar</template>
      <template v-slot:button2>Cancelar</template>
      </my-dialog-component>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      class="app-bar"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container>
        <v-row class="">
          <v-col class="d-flex justify-start">
            <v-app-bar-nav-icon @click="drawer = !drawer">
              <v-icon class="iconDrawer">mdi-menu</v-icon>
            </v-app-bar-nav-icon>
          </v-col>

          <v-col class="d-flex justify-end">
            <v-btn icon>
              <v-icon @click="todoSearch">mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-col>
        <v-app-bar-title class="bar-title d-flex justify-center"
          >Todo APP</v-app-bar-title
        >
      </v-col>
    </v-app-bar>

    <v-main>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="85vh"
      >
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import MyDialogComponent from "@/components/MyDialogComponent.vue";

export default {
  components: {
    "my-dialog-component": MyDialogComponent,
  },
  data: () => ({
    dialog: false,
    drawer: false,
    dialogUser: "",
    selectedItem: 0,
    items: [
      { text: "My List", icon: "mdi-format-list-checks", path: "/" },
      { text: "About", icon: "mdi-help-box", path: "/about" },
    ],
  }),
  computed: {
    ...mapState(["todoData"]),
    ...mapGetters(["userName"]),
    user() {
      return this.userName;
    },
  },
  methods: {
    ...mapActions([
      "actualizationTodoData",
      "changeUserName",
      "updateUser",
    ]),
    todoSearch() {},
    changeTodoUserName(user) {
      this.changeUserName(user);
      this.updateUser()
    },
  },

  //comprobamos si hay datos y actualizamos el todo desde localstorage
  mounted() {
    let todoRegistred = localStorage.getItem("todoRegistred");
    if (todoRegistred === null) {
      return;
    } else {
      this.actualizationTodoData();
      this.dialogUser = this.user
    }
  },
};
</script>
<style lang="scss" >
.app-bar {
  .v-toolbar__content {
    display: flex !important;
    flex-direction: column !important;
    position: relative;
    .v-btn.v-btn--icon.v-size--default {
      width: auto !important;
      height: auto !important;
    }
    .iconDrawer {
      cursor: pointer !important;
    }
    .container {
      .v-icon {
        padding: 10px !important;
      }
    }
    .bar-title {
      cursor: default;
      .v-app-bar-title__content {
        width: auto !important;
        position: absolute;
        top: 50px;
        font-size: 30px;
      }
      .v-app-bar-title__placeholder {
        position: absolute;
        top: 14px;
        left: 65px;
      }
    }
  }
}
.edit-icon {
  color: var(--color-black) !important;
  &:hover {
    color: var(--color-secondary);
  }
}
</style>