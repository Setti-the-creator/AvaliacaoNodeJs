const express = require('express')


const ControllersCalculadora = require('../controllers/ApiCalculadora')
const router = express.Router()



    router.get('/OpcoesCalculadora/Opcoes', ControllersCalculadora.Opcoes )
    router.post('/ApiCalculadora/Somar', ControllersCalculadora.Somar)
    router.post('/ApiCalculadora/Subtrair', ControllersCalculadora.Subtrair)
    router.post('/ApiCalculadora/Multiplicar', ControllersCalculadora.Multiplicar)
    router.post('/ApiCalculadora/Dividir', ControllersCalculadora.Dividir)
    router.post('/ApiCalculadora/Potencia', ControllersCalculadora.Potencia)
    router.post('/ApiCalculadora/Raiz', ControllersCalculadora.Raiz)



module.exports = router