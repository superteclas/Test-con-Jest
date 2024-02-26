
                   //TEST DE LA SUMA

// Importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// Comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    //expect(total).toBe(23);
//});


                   //TEST DE LA CONVERSION



// Importo laS funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

                 //TEST EURO A DOLARES

test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

               //TEST DOLARES A YENS

test("One dollar should be 121.4028 yen", function() {
    
    const yen = fromDollarToYen(1);

    
    const expected = 1 * 129.68 / 1.07;

  
    expect(fromDollarToYen(1)).toBe(expected);
});

                //TEST YENS A LIBRAS

test("One yen should be 0.0066 pounds", function() {
    
    const pounds = fromYenToPound(1);

   
    const expected = 1 * 0.87 / 129.68;

   
    expect(fromYenToPound(1)).toBe(expected);
});

