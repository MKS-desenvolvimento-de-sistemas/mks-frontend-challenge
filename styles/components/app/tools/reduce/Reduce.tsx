import Swal from 'sweetalert2';


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

export function Delete(CartDataList: any) {  
        return Swal.fire({
            title: 'Ops!',
            text: `Você não pode eliminar ${CartDataList.name} do carrinho porque o challenge não pedia crud`,
            icon: 'error',
            confirmButtonText: 'Que pena!'
          }) 
}

export function Bye() {      
        return Swal.fire({
            title: 'Isso é tudo, obrigado pela visita!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
}