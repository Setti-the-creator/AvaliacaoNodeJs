


class ServiceCalculadora
{
    Soma(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
        {
            throw new Error('Informe um numero')
        }
        return num1 + num2
    }
    Sub(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
            {
                throw new Error('Informe um numero')
            }
            return num1 - num2
    }
    Multi(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
            {
                throw new Error('Informe um numero')
            }
            return num1 * num2
    }
    Div(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
            {
                throw new Error('Informe um numero')
            }
            return num1 / num2
    }
    Potên(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
            {
                throw new Error('Informe um numero')
            }
            return num1 ** num2
    }
    Ra(num1,num2)
    {
        if(isNaN(num1)||isNaN(num2))
            {
                throw new Error('Informe um numero')
            }
            return num1 ** (1/num2)
    }
}

module.exports = new ServiceCalculadora()