export function MathNumber(number: number) {  
    return "R$"+ Math.trunc(number).toLocaleString('pt-BR');    
}