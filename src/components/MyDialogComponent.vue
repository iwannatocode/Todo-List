<template>
  <!-- Dialog -->
  <div class="dialog text-center">
    <v-dialog
      :value="dialog"
      @click:outside.stop="$emit('dialog', false)"
      width="90%"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 text-center justify-center">
          <slot name="title"></slot>
        </v-card-title>

        <v-text-field
          class="pa-5"
          dense
          placeholder="Escribe aqui"
          clearable
          :value="value"
          @input="$emit('input', $event)"
        ></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.stop="actionButton1" v-if="btn1">
            <slot name="button1"></slot>
          </v-btn>
          <v-btn color="primary" text @click.stop="actionButton2" v-if="btn2">
            <slot name="button2"></slot>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialog", "value", "btn1", "btn2"],
  emits: ["dialog", "input", "dialog-action-btn1", "dialog-action-btn2"],
  methods: {
    actionButton1() {
      this.$emit("dialog", false);
      this.$emit("dialog-action-btn1");
    },
    actionButton2() {
      this.$emit("dialog", false);
      this.$emit("dialog-action-btn2");
    },
  },
};
</script>

<style lang="sass" scoped>
</style>