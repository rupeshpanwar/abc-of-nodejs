// const square = function(x){
//     return x*x
// }

// console.log(square(3));

// const square = (x) =>{
//     return x*x
// }

// console.log(square(3));

// const square = (x) => x*x

// console.log(square(3));


const event= {
    name: 'birthday party!',
    guestList:['Onu','Sarah','Meesti'],
    printGuestList() {
        console.log('guesst for' + this.name)

        this.guestList.forEach(
            (guest) => {
                console.log(
                    guest + ' is welcome to party ' + this.name
                )
            }
        )
    }

   
}

event.printGuestList();
