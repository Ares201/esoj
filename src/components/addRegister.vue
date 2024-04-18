<template>
  <div id="app" data-app> 
    <v-dialog :value="mostrar" max-width="500px">
    <v-card>
      <v-card-title class="headline">Agregar Nuevo Registro de Asistencia</v-card-title>
      <v-card-text>
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
  </div>
</template>

<script>
export default {
  props: {
    dialogF: {type: Boolean, default: false}
  },
  data() {
    return {
      mostrar: false,
      nombre: '',
      fecha: '',
      horaEntrada: '',
      horaSalida: ''
    }
  },
  watch: {
    dialogF (val) {
      this.mostrar = val
    }
  },
  methods: {
    cerrar() {
      this.$emit('cerrarForm', false); // Emitir evento para cerrar el modal
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