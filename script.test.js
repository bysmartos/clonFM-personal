import {sumar} from "./testing"


test ("1+1=2", () =>{
    expect (1+1).toBe(2);
})

test("sumar should return 3 when arguments are 1 and 2", ()=>{
    const resultado = sumar(1,2)
    expect(resultado).toBe(3);

})
