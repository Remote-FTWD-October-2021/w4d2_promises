//Funcionalidades de JavaScript asīncrono

//1. Callback functions

// const oddOrEven = (number, callback)=>{
//   let answer = null
//   setTimeout(()=>{
//     if(number % 2 === 0){
//       answer = 'par'
//     } else if(number % 2 !== 0){
//       answer = 'impar'
//     } 
//     callback(answer)
//   }, Math.floor(Math.random() * 2000) + 1000) // entre 1 y 3 segundos
// }

// const first = oddOrEven(5, (output)=>{
//   console.log('caclulo 1:', output)
//   oddOrEven(10, (output)=>{
//     console.log('caclulo 2:', output)
//     oddOrEven(3, (output)=>{
//       console.log('caclulo 3:', output)
//     })
//   })
// })

//2. Promises

// const oddOrEven = (number)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(typeof number !== 'number'){
//         reject('Numero no valido')
//       } else if(number % 2 === 0){
//         resolve('par')
//       } else if(number % 2 !== 0){
//         resolve('impar')
//       }
//     }, Math.floor(Math.random() * 2000) + 1000) // entre 1 y 3 segundos
//   })
// }

// const makeCalculations = ()=>{
//   oddOrEven(5)
//   .then((message)=>{ //se activa cuando la promesa se cumpla (resolve())
//     console.log('1 calculo: ', message)
//     oddOrEven(12)
//     .then((message)=>{ //se activa cuando la promesa se cumpla (resolve())
//       console.log('2 calculo:', message)
//       oddOrEven(13)
//       .then((message)=>{ //se activa cuando la promesa se cumpla (resolve())
//         console.log('3 calculo:', message)
//       })
//       .catch((message)=>{ //se activa cuando la promesa NO se cumple (reject())
//         console.log('catch', message)
//       })
//     })
//     .catch((message)=>{ //se activa cuando la promesa NO se cumple (reject())
//       console.log('catch', message)
//     })
//   })
//   .catch((message)=>{ //se activa cuando la promesa NO se cumple (reject())
//     console.log('catch', message)
//   })  
// }

// makeCalculations()



//3. async / await    -> try/catch
// const oddOrEven = (number)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(typeof number !== 'number'){
//         reject('Numero no valido')
//       } else if(number % 2 === 0){
//         resolve('par')
//       } else if(number % 2 !== 0){
//         resolve('impar')
//       }
//     }, Math.floor(Math.random() * 2000) + 1000) // entre 1 y 3 segundos
//   })
// }

// makeCalculations = async ()=>{
//   try {
//     const first = await oddOrEven(5)
//     console.log('1:', first)
//     const second = await oddOrEven('xx')
//     console.log('2:', second)
//     const third = await oddOrEven(19)
//     console.log('3:', third)
//   } catch(message) {
//     console.log(message)
//   }
// }

// makeCalculations()



// https://api.jikan.moe/v3/search/anime?q=attack%20on%20titans&page=1


// fetch("https://api.jikan.moe/v3/search/anime?q=attack%20on%20titans&page=1")
// .then((result)=>{
//   console.log(result)
// })
// .catch((err)=>{
//   console.log(err)
// })

const axios = require('axios')

// //.then() .catch()
// axios.get('https://api.jikan.moe/v3/search/anime?q=attack%20on%20titans&page=1')
// .then((resultFromAxios)=>{
//   console.log(resultFromAxios.data.results)
// })
// .catch((err)=>{
//   console.log(err)
// })

//async await

const attackOnTitansCall = async ()=>{
  try{
    const axiosCall = await axios.get('https://api.jikan.moe/v3/search/anime?ejhruiwehruighwiehgiewhgiheiuguhiehgiuewhr')
    const arrayOfResults = axiosCall.data.results
    console.log(arrayOfResults)
  }catch(err){
    console.log('xxxxx', err)
  }
}

attackOnTitansCall()