const ServiceCalculadora = require('../service/ApiCalculadora')


class ControllersCalculadora
{

    Opcoes ()
    {
        console.log('Opções : [1] - Somar: /ApiCalculadora/Somar [2] - Subtrair: /ApiCalculadora/Subtrair [3] - Dividir: /ApiCalculadora/Dividir [4] - Multiplicar: /ApiCalculadora/Multiplicar [5] - Potência: /ApiCalculadora/Potencia [6] - Raiz: /ApiCalculadora/Raiz ')
    }
    Somar(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Soma(num1,num2)


        res.json({'Resultado:': result})
    }
    Subtrair(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Sub(num1,num2)


        res.json({'Resultado:': result})
    }
    Multiplicar(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Multi(num1,num2)


        res.json({'Resultado:': result})
    }
    Dividir(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Div(num1,num2)


        res.json({'Resultado:': result})
    }
    Potencia(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Potên(num1,num2)

        res.json({'Resultado:': result})
    }
    Raiz(req,res)
    {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Ra(num1,num2)

        res.json({'Resultado:': result})
    }
}

module.exports = new ControllersCalculadora()