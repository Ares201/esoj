<template>
  <v-container>
    <h2>Registro de Asistencia</h2>
    <v-data-table
      :headers="headers"
      :items="registros"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nombre }}</td>
        <td>{{ props.item.fecha }}</td>
        <td>{{ props.item.horaEntrada }}</td>
        <td>{{ props.item.horaSalida }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'RegistroAsistencia',
  data() {
    return {
      registros: [
        { nombre: 'Juan', fecha: '2024-03-24', horaEntrada: '09:00', horaSalida: '18:00' },
        { nombre: 'María', fecha: '2024-03-24', horaEntrada: '09:15', horaSalida: '17:45' },
        { nombre: 'María', fecha: '2024-03-24', horaEntrada: '09:15', horaSalida: '17:45' }
      ],
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Hora de Entrada', value: 'horaEntrada' },
        { text: 'Hora de Salida', value: 'horaSalida' }
      ]
    }
  }
}
</script>

<style>
/* Estilos adicionales según sea necesario */
</style>