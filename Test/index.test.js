const {describe, it, expect} = require('@jest/globals')

const ServiceCalculadora = require('../src/service/ApiCalculadora')
describe('Teste das 6 operações matematicas da Api', () =>
{
    //
    //
    // Função Somar
    //
    //
    it('Soma de 1 numero inteiro e 1 decimal',() => {
    
        const result = ServiceCalculadora.Soma(3,2.5)

        expect(result).toBe(5.5)
    })

    it('Soma de 2 numeros positivos',() => {
    
        const result = ServiceCalculadora.Soma(3,4)

        expect(result).toBe(7)
    })

    it('Soma de 2 numeros negativos' ,() => {
    
        const result = ServiceCalculadora.Soma(-3,-4)

        expect(result).toBe(-7)
    })

    it('Soma de 1 numero positivo e 1 negativo',() => {
    
        const result = ServiceCalculadora.Soma(5,-5)

        expect(result).toBe(0)
    })

    it('Soma de 1 numero negativo e 1 positivo', () => {
    
        const result = ServiceCalculadora.Soma(-5,5)

        expect(result).toBe(0)
    })
})



    //
    //
    // Função Subtração
    //
    //
    //
    describe('Teste das 6 operações matematicas da Api', () =>
{
    it('Subtração de 1 numero inteiro e 1 decimal', () => {
    
        const result = ServiceCalculadora.Sub(3,2.5)

        expect(result).toBe(0.5)
    })

    it('Subtração de 2 numeros positivos', () => {
    
        const result = ServiceCalculadora.Sub(3,4)

        expect(result).toBe(-1)
    })

    it('Subtração de 2 numeros negativos', () => {
    
        const result = ServiceCalculadora.Sub(-3,-4)

        expect(result).toBe(1)
    })

    it('Subtração de 1 numero positivo e 1 negativo', () => {
    
        const result = ServiceCalculadora.Sub(5,-5)

        expect(result).toBe(10)
    })

    it('Subtração de 1 numero negativo e 1 positivo', () => {
     const result = ServiceCalculadora.Sub(-5,5)

        expect(result).toBe(-10)
    })
})

    //
    //
    // Função Divisão
    //
    //
    //
    describe('Teste das 6 operações matematicas da Api', () =>
    {

    it('Divisão de 1 numero inteiro e 1 decimal', () => {
    
        const result = ServiceCalculadora.Div(3,2.5)

        expect(result).toBe(1.2)
    })

    it('Divisão de 2 numeros positivos', () => {
    
        const result = ServiceCalculadora.Div(4,2)

        expect(result).toBe(2)
    })

    it('Divisão de 2 numeros negativos', () => {
    
        const result = ServiceCalculadora.Div(-4,-2)

        expect(result).toBe(2)
    })

    it('Divisão de 1 numero positivo e 1 negativo', () => {
    
        const result = ServiceCalculadora.Div(4,-2)

        expect(result).toBe(-2)
    })

    it('Divisão de 1 numero negativo e 1 positivo', () => {
    
        const result = ServiceCalculadora.Div(-4,2)

        expect(result).toBe(-2)
    })
})

    //
    //
    // Função Multiplicação
    //
    //
    //
    describe('Teste das 6 operações matematicas da Api', () =>
        {
    it('Multiplicação de 1 numero inteiro e 1 decimal', () => {
    
        const result = ServiceCalculadora.Multi(3,2.5)

        expect(result).toBe(7.5)
    })

    it('Multiplicação de 2 numeros positivos', () => {
    
        const result = ServiceCalculadora.Multi(4,2)

        expect(result).toBe(8)
    })

    it('Multiplicação de 2 numeros negativos', () => {
    
        const result = ServiceCalculadora.Multi(-4,-2)

        expect(result).toBe(8)
    })

    it('Multiplicação de 1 numero positivo e 1 negativo', () => {
    
        const result = ServiceCalculadora.Multi(4,-2)

        expect(result).toBe(-8)
    })

    it('Multiplicação de 1 numero negativo e 1 positivo', () => {
    
        const result = ServiceCalculadora.Multi(-4,2)

        expect(result).toBe(-8)
    })
})

    //
    //
    // Função Potenciação
    //
    //
    //
    describe('Teste das 6 operações matematicas da Api', () =>
        {
  


    it('Potenciação de 2 numeros positivos', () => {
    
        const result = ServiceCalculadora.Potên(4,2)

        expect(result).toBe(16)
    })

    it('Potenciação de 2 numeros negativos', () => {
    
        const result = ServiceCalculadora.Potên(-4,-2)

        expect(result).toBe(0.0625)
    })

    it('Potenciação de 1 numero positivo e 1 negativo', () => {
    
        const result = ServiceCalculadora.Potên(4,-2)

        expect(result).toBe(0.0625)
    })

    it('Potenciação de 1 numero negativo e 1 positivo', () => {
    
        const result = ServiceCalculadora.Potên(-4,2)

        expect(result).toBe(16)
    })
})    

    //
    //
    // Função Raiz
    //
    //
    //
    describe('Teste das 6 operações matematicas da Api', () =>
    {

        it('Raiz de 2 numeros positivos', () => {
            
            const result = ServiceCalculadora.Ra(4,2)
            
            expect(result).toBe(2)
        })
        
        
        
        it('Raiz de 1 numero negativo e 1 positivo', () => {
            
            const result = ServiceCalculadora.Ra(-4,2)
            
            expect(result).toBe(NaN)
        })
        
    })
    
   

