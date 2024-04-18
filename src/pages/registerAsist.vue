<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title><strong style="color:#2cbcb4">Registro</strong></v-toolbar-title>
    </v-toolbar>
    <v-divider />
    <v-card-text>
      <v-container>
        <register
          :dialogF="dialog"
          @cerrarForm="dialog=false"
        />
        <v-btn class="mx-2" fab dark small color="primary" @click=" dialog = !dialog">
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-data-table
          height="500px"
          fixed-header
          :headers="headers"
          :items="products"
        >
          <template #[`item.price`]="{item}">
            <span>S/.{{ item.price }}</span>
          </template>
          <template #[`item.updatedAt`]="{item}">
            <span>{{ fech(item.updatedAt) }}</span>
          </template>
        </v-data-table>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from 'axios'
import register from '@/components/addRegister.vue'
export default {
  name: 'RegistroAsistencia',
  components: {
    register
  },
  data() {
    return {
      dialog: false,
      products: [],
      name: 'Cervera',
      headers: [
        { text: 'Numero', value: 'id'},
        { text: 'Nombre', value: 'title' },
        { text: 'Descripcion', value: 'description' },
        { text: 'Precio', value: 'price' },
        { text: 'Fecha Actualizado', value: '' }
      ],
    }
  },
  beforeMount () {
    this.buscar()
  },
  methods: {
    async buscar () {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        this.products = response.data
        console.log(response, 'Data producto')
      } catch (error) {
        console.log(error, 'VERIFICAR EL SIGUIENTE ERROR')
      }
    },
    // fecha
    fech (fi) {
      const date = new Date(fi)
      const year = date.getFullYear()
      let month = date.getMonth()
      let dt = date.getDate()
      month++
      if (dt < 10) {
        dt = '0' + dt
      }
      if (month < 10) {
        month = '0' + month
      }
      return `${dt}/${month}/${year}`
    },
  }
}
</script>
<style>
/* Estilos adicionales según sea necesario */
</style>
