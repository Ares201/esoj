<template>
  <v-dialog v-model="mostrar" max-width="500px">
    <v-card>
      <v-card-title class="headline">Agregar Nuevo Registro de Asistencia</v-card-title>
      <v-card-text>
        <!-- Aquí van los campos del formulario para agregar un nuevo registro -->
        <v-text-field label="Nombre" v-model="nombre" outlined></v-text-field>
        <v-text-field label="Fecha" v-model="fecha" outlined></v-text-field>
        <v-text-field label="Hora de Entrada" v-model="horaEntrada" outlined></v-text-field>
        <v-text-field label="Hora de Salida" v-model="horaSalida" outlined></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="cerrar">Cancelar</v-btn>
        <v-btn color="primary" @click="agregarRegistro">Agregar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalAgregarRegistro',
  props: {
    value: Boolean
  },
  data() {
    return {
      mostrar: this.value,
      nombre: '',
      fecha: '',
      horaEntrada: '',
      horaSalida: ''
    }
  },
  watch: {
    value(newVal) {
      this.mostrar = newVal;
    }
  },
  methods: {
    cerrar() {
      this.$emit('update:value', false); // Emitir evento para cerrar el modal
    },
    agregarRegistro() {
      // Lógica para agregar un nuevo registro
      console.log('Agregando nuevo registro');
      this.cerrar(); // Cerrar el modal después de agregar el registro
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales según sea necesario */
</style>