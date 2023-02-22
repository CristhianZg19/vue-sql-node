var config = require('./dbconfig');
const sql = require('mssql');

async function getContactos(){
    try {
        let pool = await sql.connect(config);
        let datos = await pool.request().query("SELECT * FROM contactos");
       // console.log('CONECTADO CSMR XD', datos)
        return datos.recordsets;
    } catch (error) {
        console.log(error)
        console.log('error de conexion')
    }
}

async function getContactosID(id){
    try {
        let pool = await sql.connect(config);
        let datos = await pool.request()
        .input('input_parameter', sql.Int, id)
        .query("SELECT * FROM contactos WHERE codigo = @input_parameter");
        //console.log('CONECTADO CSMR XD', datos)
        return datos.recordsets;
    } catch (error) {
        console.log(error)
        console.log('error de conexion')
    }
}

async function insertContactos(categoria){
    try {
        let pool = await sql.connect(config);
        let insertar = await pool.request()
        .input('codigo', sql.Int, categoria.codigo)
        .input('nombre', sql.VarChar, categoria.nombre)
        .input('empresa', sql.VarChar, categoria.empresa)
        .input('celular', sql.VarChar, categoria.celular)
        .input('correo', sql.VarChar, categoria.correo)
        .execute("insertdatos");
        //console.log('CONECTADO CSMR XD', datos)
        return insertar.recordsets;
    } catch (error) {
        console.log(error)
        console.log('error en insertar ')
    }
}

module.exports = {
    getContactos : getContactos,
    getContactosID : getContactosID,
    insertContactos : insertContactos

}