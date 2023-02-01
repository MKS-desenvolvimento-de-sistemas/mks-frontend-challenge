export function Reduce(number: any) {  
    let prices = number.map(function(item: any){
        let quantity = parseFloat(item.price) * parseFloat(item.counter);
        return quantity;
     });
     const add = function(arr: any[]) {
        return arr.reduce((a, b) => a + b, 0);
    };
     let sum = add(prices);
        return sum;  
}