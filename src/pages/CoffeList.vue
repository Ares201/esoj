<template>
   <div class="bg1">
    <v-img height="250" src="@/img/bg-cafe.jpg"></v-img>
    <v-card class="bg2 txt1 margin2" max-width="80%">
      <div class="contentP">
        <v-card-title><h2 style="padding-left: 20%;">Nuestra Coleccion</h2></v-card-title>
        <p class="txt2">
          Presentamos nuestra colección de café, una selección de cafés únicos de diferentes tipos y orígenes de tueste, tostados por expertos en pequeños lotes y enviados frescos semanalmente. 
        </p>
        <v-row>
          <v-col cols="12" sm="12">
              <v-btn class="txt1 margin3" color="#6F757C" depressed>Todos</v-btn>
              <v-btn class="margin3" disabled depressed><span class="txt1">Disponibles</span></v-btn>
            </v-col>
          </v-row>
      </div>
      <div class="contentP2">
        <v-row>
          <v-col v-for="(coffe, index) in coffees" :key="index">
            <v-card class="bg2 txt1" max-width="300">
              <v-img height="150" width="300" :src="coffe.image">
              </v-img>
              <span :class="coffe.popular ? 'bg5 popular txt3' : ''"> {{ coffe.popular ? 'Popular' : '' }}</span>
              <v-card-title style="height: 70px;">
                <span class="txt1 name">{{ coffe.name}}</span>
                <span class="txt1 available">
                  <v-icon
                    large
                    :style="{ 'background-color': coffe.available ? '#F6C768' : '' }"
                  >
                    mdi-star-outline
                  </v-icon>
                </span>
                <span class="price txt3 bg4">{{ coffe.price }}</span>
                <span class="txt1 rating">{{ coffe.rating }}</span>
                <span class="txt1 votes">{{ coffe.votes ? `( ${coffe.votes} + votos)` : ''}}</span>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div style="height: 100px;">
        <span style="position: absolute; margin-top: 80px;">Cervera G</span>
      </div>
    </v-card>
   </div>
</template>
<script>
import axios from 'axios'
export default {
   data() {
     return {
       coffees: []
     }
   },
   beforeMount () {
    this.fetchCoffees()
   },
   methods: {
    fetchCoffees() {
      axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then((response) =>{
      this.coffees = response.data
      })
    }
   }
}
</script>
<style scoped>
.bg1{
  background-color: #111315;
}
.bg2{
  background-color: #1B1D1F;
}
.bg3{
  background-color: #6F757C;
}
.bg4{
  background-color: #BEE3CC;
}
.bg5{
  background-color: #F6C768;
}
.bg6{
  background-color: #ED735D;
}
.txt1{
  color:#FEF7EE;
  text-align: center;
}
.txt2{
  color:#6F757C;
}
.txt3{
  color:#111315;
}
.margin1{
  border-radius: 15px;
  margin:auto;
}
.margin2{
  margin:auto;
  margin-top:-100px;
  border-radius: 15px;
}
.margin3{
  margin-top:10px;
  margin-left: 10px;
}
.contentP{
  margin:auto;
  width: 40%;
}
.contentP2{
  max-width: 85%;
  margin:auto
}
.popular{
  position: absolute;
  margin-top: -140px;
  margin-left: -140px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
}
.price{
  position: absolute;
  border-radius:5px;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
  margin-left: 235px;
  margin-top: -10px;
}
.name{
  position: absolute;
  margin-top: -30px;
}
.available{
  font-size: 16px;
  position: absolute;
  margin-top: 30px;
}
.rating{
  position: absolute;
  font-size: 16px;
  margin-top:30px;
  margin-left: 40px;
}
.votes{
  font-size: 16px;
  position: absolute;
  margin-top:30px;
  margin-left: 60px;
}
</style>
