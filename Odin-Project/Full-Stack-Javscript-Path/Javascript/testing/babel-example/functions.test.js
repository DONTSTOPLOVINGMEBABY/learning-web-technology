import { Calculator, reverseString, capitalize, calc, analyze_array, caesar_cipher } from "./functions";

it ("Didn't capitalize", () => {
    expect(capitalize('henry')).toBe('Henry')
})

it ("Didn't capitalize", () => {
    expect(capitalize('rock solid!')).toBe('Rock solid!')
})

it ("Didn't reverse", () => {
    expect(reverseString('henry')).toBe('yrneh') 
})

it ("Multiply doesn't work", () => {
    expect(calc.multiply(3, 3)).toBe(9) 
})

it("Add doesn't work", () => {
    expect(calc.add(3, 3)).toBe(6) 
})

it("Subtract doesn't work", () => {
    expect(calc.subtract(3, 3)).toBe(0) 
})

it("Add doesn't work", () => {
    expect(calc.divide(3, 3)).toBe(1) 
})

it("Caesar Cipher doesn't work", () =>{
    expect(caesar_cipher("Henry", 1)).toBe("Ifosz") 
}) 

it("Analyze Array doesn't work", () => {
    expect(analyze_array([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 })
})



