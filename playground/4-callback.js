// add(1,4,(sum) => {
//     console.log(sum)
// })

// const add = (a,b,callback) => {
//     setTimeout(() => {
//         callback( a + b)
//     }, 3000);
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })

const goeCode = (address,callback) =>{
    setTimeout(() => {
        const data = {
            lt:0,
            lg:0
        }

        callback(data)
    }, 2000)
}


goeCode('logAngles',(data)=>{
    console.log(data)
}
)

// const add = (a,b, callback) => {

//     setTimeout(() => {
//         callback(a+b)
//     }, 2000)

// } 

// add(1,4, (sum) =>{
//     console.log(sum)
// }
// )


