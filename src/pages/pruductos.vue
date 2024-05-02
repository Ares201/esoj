<template>
  <div>
    <v-container>
      <product
      :dialogF="dialog"
      @cerrarForm="dialog=false"
      @agregarProducto="agregarProducto"
      />
      <v-btn @click="dialog = true"><v-icon>mdi-plus</v-icon>Producto {{ dialog }}</v-btn>
      <v-spacer></v-spacer>
      <h2>Productos</h2>
      <v-row>
        <v-col cols="12" sm="6" md="4"
          v-for="(product, index) in products" :key="index"
          >
          <v-card class="product-card" outlined>
            <v-list-item three-line>
              <v-row>
                <v-col cols="12">
                  <span>{{ product.name }}</span>
                </v-col>
                <v-col cols="6">
                  <img class="product-img" :src="product.img" alt="Producto">
                </v-col>
                <v-col cols="4">
                  S/{{ product.price }}
                </v-col>
                <v-col cols="2">
                  <v-btn @click="editarProducto(product)" icon style="color: black;">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="eliminarProducto(product.id)" icon style="color: orangered;">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <span>
                    {{ product.amount > 0? `Existente: ${product.amount}` : `Agotado: ${product.amount}` }}</span>
                </v-col>
              </v-row>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import product from '@/components/addProduct.vue'
export default {
  name: 'productoS',
  components:{
    product
  },
  data() {
    return {
      dialog: false,
      products: [
        {
          id:1,
          name: 'Mouse Philips M344 Inalambrico Blanco',
          price: 10.99,
          img: 'https://http2.mlstatic.com/D_NQ_NP_688943-MLA44872473561_022021-O.webp',
          amount: 4
        },
        {
          id:2,
          name: 'Mouse gamer de juego VSG Aurora púrpura austral',
          price: 95,
          img: 'https://http2.mlstatic.com/D_NQ_NP_749407-MLA44836287204_022021-O.webp',
          amount: 24
        },
        {
          id:3,
          name: 'P Mouse Wireless Logitech G305 12000 Dpi Gaming Color BLUE',
          price: 15.75,
          img: 'https://http2.mlstatic.com/D_NQ_NP_856069-MLU72826760832_112023-O.webp',
          amount: 14
        }
      ],
      productoId: null
    };
  },
  methods: {
    agregarProducto(nuevoProducto) {
      this.products.unshift(nuevoProducto);
    },
    eliminarProducto(id) {
      const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    },
    editarProducto(product) {
      this.productoId = {...product}
      this.dialog = true
    }
  }
};
</script>

<style scoped>
.product-card {
  margin: 10px;
  width: 100%;
}

.product-img {
  width: 100%;
}
</style>
