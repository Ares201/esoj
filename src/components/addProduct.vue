<template>
  <div id="app" data-app>
    <v-dialog :value="mostrar" max-width="500px" style="background-color: red;">
      <v-card>
        <v-card-title class="headline">Agregar Nuevo producto</v-card-title>
        <v-card-text>
          <v-text-field label="Nombre" v-model="name" outlined></v-text-field>
          <v-text-field label="Precio" v-model="price" outlined></v-text-field>
          <v-text-field label="ImgenUrl" v-model="img" outlined></v-text-field>
          <v-text-field label="Cantidad Adquirida" v-model="amount" outlined></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="cerrar">Cancelar</v-btn>
          <v-btn @click="agregarProducto">Agregar</v-btn>
          <v-btn @click="editarProducto">Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogF: {type: Boolean, default: false},
    productoSeleccionado: { type: Object, default: null }
  },
  watch: {
    dialogF (val) {
      this.mostrar = val
    },
    productoSeleccionado(val) {
      // Actualiza los datos del producto seleccionado cuando cambia
      if (val) {
        this.name = val.name;
        this.price = val.price;
        this.img = val.img;
        this.amount = val.amount;
        // Abre el modal
        this.mostrar = true;
      }
    }
  },
  data () {
    return{
      mostrar: false,
      name: '',
      price: '',
      img: '',
      amount: ''
    }
  },
  methods: {
    cerrar() {
      this.$emit('cerrarForm')
    },
    agregarProducto() {
      const nuevoProducto = {
        name: this.name,
        price: parseFloat(this.price),
        img: this.img,
        amount: parseInt(this.amount)
      };
      this.name = ''
      this.price = ''
      this.img = ''
      this.amount = ''
      this.$emit('agregarProducto', nuevoProducto);
      this.cerrar();
    }
  }
}
</script>