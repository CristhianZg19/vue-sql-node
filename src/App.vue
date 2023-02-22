<template>

  <v-dialog v-model="modal">
    <input type="text" placeholder="codigo">
  </v-dialog>



  <img alt="Vue logo" src="./assets/logo.png">
  <h1><button @click="prueba()">Listar Datos</button></h1>
  <h1><button @click="modalAdd()">agregar</button></h1>

  <br>

  <input type="text" v-model="id">

  <button @click="prueba2">id datos</button>
<br>
<table>
  <tr>
    <th>codigo</th>
    <th>nombre</th>
    <th>empresa</th>
    <th>celular</th>
    <th>correo</th>
  </tr>
  <tr v-for="(item,index) in datos" :key="index">
    <td>{{ item.codigo }}</td>
    <td>{{ item.nombre }}</td>
    <td>{{ item.empresa }}</td>
    <td>{{ item.celular }}</td>
    <td>{{ item.correo }}</td>
  </tr>
  
</table>

  <h3 v-for="(item,index) in datosID" :key="index">  {{ item.nombre }}</h3>

</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data: function () {
  return {
    datos: [],
    datosID: [],
    id: '',
    modal: false
  }},
  methods: {
      async prueba(){
        try {
          
        await axios.get("http://localhost:8090/api/contactos/").then((data) => {
       // console.log(data.data, 'datos')
        this.datos = data.data
        
      })  }catch (error) {
        console.log(error, 'error')
      }
      },
      modalAdd(){
        this.modal = false
      },
      async prueba2(){
        try {
          
        await axios.get(`http://localhost:8090/api/contactos/${this.id}`).then((data) => {
      //  console.log(data.data, 'datos')
        if(data.data.length>0){
          console.log(data.data)
          this.datos = data.data
        
        }else{
          alert('no hay datos')
        }
        
      })  }catch (error) {
        console.log(error, 'error')
      }
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
