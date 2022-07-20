<template>
  <div class="home">
    <v-text-field
      @click:append="putNewList"
      @keyup.enter="putNewList"
      v-model="newTodoitem"
      clearable
      outlined
      label="Nueva Tarea"
      append-icon="mdi-send"
      hide-details
      class="text-field"
    ></v-text-field>

    <v-list flat>
      <v-list-item-group>
        <v-list-item
          v-for="item in todoList"
          :key="item.id"
          @click="item.state = !item.state"
          :class="{ 'light-green lighten-4': item.state }"
        >
          <template>
            <v-list-item-content>
              <v-list-item-title
                :class="[
                  { 'text-decoration-line-through': item.state },
                  { 'my-list-class': item.state },
                ]"
                >{{ item.text }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon @click.stop="editTodoItem(item.id)" class="edit-icon"
                >mdi-pencil</v-icon
              >
            </v-list-item-icon>
            <v-list-item-icon>
              <v-icon class="delete-icon" @click.stop="deleteTodoItem(item.id)"
                >mdi-delete</v-icon
              >
            </v-list-item-icon>
          </template>
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
      v-model="dialogItem.text"
      @dialog-action-btn1="
        edit ? editItem(dialogItem) : deleteListItem(dialogItem.id)
      "
      :btn1="true"
      :btn2="true"
    >
      <template v-slot:title>{{ dialogTitle }}</template>
      <template v-slot:button1>{{ dialogbutton1 }}</template>
      <template v-slot:button2>Cancelar</template>
    </my-dialog-component>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MyDialogComponent from "@/components/MyDialogComponent.vue";

export default {
  components: {
    "my-dialog-component": MyDialogComponent,
  },
  data: () => ({
    dialog: false,
    dialogItem: { text: "", id: null },
    newTodoitem: null,
    dialogTitle: "",
    dialogbutton1: "",
    edit: true,
  }),
  computed: {
    ...mapGetters(["todoList"]),
  },

  methods: {
    ...mapActions(["putNewListItem", "deleteListItem", "editItem"]),

    //guardo el nuevo item creado
    putNewList() {
      if (this.newTodoitem !== null) {
        let payload = { id: Date.now(), text: this.newTodoitem, state: false };
        this.putNewListItem(payload);
        this.newTodoitem = null;
      }
    },

    //elimino el item seleccionado
    deleteTodoItem(id) {
      this.edit = false;
      this.dialog = true;
      this.dialogTitle = "Desea Eliminar Esta Nota";
      this.dialogbutton1 = "Eliminar";
      this.dialogItem.id = id;
      // this.deleteListItem(id);
    },

    //edito el todo item
    editTodoItem(id) {
      this.edit = true;
      this.dialog = true;
      this.dialogTitle = "Editar Nota";
      this.dialogbutton1 = "Guardar";

      this.todoList.find((item) => {
        if (item.id === id) {
          this.dialogItem.id = id;
          this.dialogItem.text = item.text;
          return true;
        }
        return false;
      });
    },

    //guardo los cambios del item x el dialog
    /* changeTodoItem() {
      this.editItem(this.dialogItem);
    }, */
  },

  //guardos los cambios hechos del todo en localstorage
  updated() {
    if (this.todoList.length == 0) {
      localStorage.removeItem("todoRegistred");
      localStorage.removeItem("todoData");
    } else {
      localStorage.setItem("todoRegistred", "true");
      localStorage.setItem("todoData", JSON.stringify(this.todoList));
    }
  },
};
</script>
<style lang="scss" >
.home {
  .text-field {
    margin: 15px auto !important;
  }
  .mdi-send:hover {
    color: var(--color-black) !important;
  }
  .delete-icon {
    color: rgba(0, 0, 0, 0.822);
    &:hover {
      color: var(--color-danger) !important;
    }
  }
  .edit-icon {
    color: var(--color-black);
    &:hover {
      color: var(--color-secondary);
    }
  }
  .v-list-item {
    margin-top: 2px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.089);
  }
  .my-list-class {
    color: rgba(0, 0, 0, 0.452) !important;
  }
}
</style>