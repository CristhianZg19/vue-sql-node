<template>

<div>
  
  
    <input type="text" placeholder="nombre" v-model="nombre">
<br>
 
    <input type="text" placeholder="empresa" v-model="empresa">
 <br>

    <input type="text" placeholder="celular" v-model="celular">
<br>

    <input type="text" placeholder="correo" v-model="correo">


  <h1><button @click="agregarDatos()">agregar</button></h1>

</div>



  <h1><button @click="prueba()">Listar Datos</button></h1>

  <br>

  <input type="text" v-model="id">

  <button @click="prueba2">datos por codigo</button>
<br>
<table>
  <tr>
    <th>codigo</th>
    <th>nombre</th>
    <th>empresa</th>
    <th>celular</th>
    <th>correo</th>
    <th>accion</th>
  </tr>
  <tr v-for="(item,index) in datos" :key="index">
    <td>{{ item.codigo }}</td>
    <td>{{ item.nombre }}</td>
    <td>{{ item.empresa }}</td>
    <td>{{ item.celular }}</td>
    <td>{{ item.correo }}</td>
    <td><button @click=" eliminarregistro(item.codigo)">eliminar</button></td>
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
    modal: false,    
    nombre: '',
    empresa: '',
    celular: '',
    correo: '',
    contactos: {}

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
      agregarDatos(){
        const contacto = Object.assign({})     
        contacto.nombre = this.nombre
        contacto.empresa = this.empresa
        contacto.celular = this.celular
        contacto.correo = this.correo
       this.contactos = contacto

       axios.post('http://localhost:8090/api/contactos/guardar/', this.contactos)

},
async eliminarregistro(codigo){
        try {
          
        await axios.get(`http://localhost:8090/api/eliminar/${codigo}`).then((data) => {
      //  console.log(data.data, 'datos')
console.log(data)        
      })  }catch (error) {
        console.log(error, 'error')
      }
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
