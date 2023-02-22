const config = {
    user: 'sa',
    password: '1234',
    server: 'localhost',
    database: 'CONTACTOS',
    options:{
        trustServerCertificate: true,
        trustedconnection: false,
        enableArithAbort: true,
        encrypt:true
    }
}

module.exports = config;