let changeArr = [
  ["ONE HUNDRED", 100.0],
  ["TWENTY", 20.0],
  ["TEN", 10.0],
  ["FIVE", 5.0],
  ["ONE", 1.0],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

const checkCashRegister = (price, cash, cid) => {
  /*
  The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
  */ 
const arrayCentavos = cid.slice(0,4).reverse()
console.log(arrayCentavos)
const arrayIntegrales = cid.slice(4).reverse()
console.log(arrayIntegrales)
const changeArrDec = changeArr.slice(5)
console.log(changeArrDec)
const changeArrInt = changeArr.slice(0,5)
console.log(changeArrInt)
 let  [disponibleIntegrales, disponibleDecimales] = calcularCidDisponible(cid)
 const newArray = []
 let change = cash - price
 let [cambioIntegrales, cambioDecimales] = change.toFixed(2).split('.')
 cambioDecimales = cambioDecimales / 100
 let total = disponibleIntegrales + disponibleDecimales
 let disponibleDecimalesInt = parseFloat(disponibleDecimales)
 console.log(cambioIntegrales, cambioDecimales,disponibleIntegrales ,disponibleDecimalesInt )

 // Primer check, si el total de dinero disponible es menor que el cambio, no se puede devolver el cambio
  if (total < change || disponibleDecimales < cambioDecimales) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  } 
  // Segundo check, si el total de dinero disponible es igual al cambio, no se puede devolver el cambio
  else if (total === change) {
    return {
      status: "CLOSED",
      change: cid,
    };
  }
  // Tercer check, si el total de dinero disponible es mayor que el cambio, se puede devolver el cambio
  else {  
      // Se recorre el array decimales si hay cambio en decimales
      
      // Se recorre el array integrales si hay cambio en integrales
      if (cambioIntegrales > 0) {
        for(let i = 0; i < arrayIntegrales.length; i++) {
          console.log(arrayIntegrales[i][1])
          console.log(cambioIntegrales)
          if (arrayIntegrales[i][1] >= cambioIntegrales) {            
            for(let i = 0; i < changeArrInt.length; i++) {
              console.log(changeArrInt[i][1])
              let cambioIntegralesIterador = 0
              console.log(cambioIntegrales)
              while(cambioIntegralesIterador + changeArrInt[i][1] <= cambioIntegrales) {
                console.log(arrayIntegrales[i][1])
                if(cambioIntegralesIterador <= arrayIntegrales[i][1]) {
                  if(cambioIntegralesIterador + changeArrInt[i][1] > arrayIntegrales[i][1]  ){
                    break
                  } else {
                    cambioIntegralesIterador += changeArrInt[i][1]   
                  }            
                }                
              }
             
              if (cambioIntegralesIterador > 0) {
                newArray.push([changeArrInt[i][0], cambioIntegralesIterador])
                cambioIntegrales = cambioIntegrales - cambioIntegralesIterador
                cambioIntegrales = Math.round(cambioIntegrales * 100) / 100
                console.log(cambioIntegrales)
              }
            }
            console.log(cambioIntegrales)
            console.log(arrayIntegrales[i][1]-(arrayIntegrales[i][1] - cambioIntegrales))
            arrayIntegrales[i][1] = arrayIntegrales[i][1] - cambioIntegrales
            console.log(arrayIntegrales[i][1])
            cambioIntegrales = 0
            break
          }
        }
      }
      if (cambioDecimales > 0) {
        for(let i = 0; i < arrayCentavos.length; i++) {
          console.log(arrayCentavos[i][1])
          if (arrayCentavos[i][1] >= cambioDecimales) {            
            for(let i = 0; i < changeArrDec.length; i++) {
              console.log(changeArrDec[i][1])
              console.log(cambioDecimales)
              let cambioDecimalesIterador = 0
              while((cambioDecimalesIterador + changeArrDec[i][1]) <= cambioDecimales) {
                if(cambioDecimalesIterador <= arrayCentavos[i][1]) {
                  cambioDecimalesIterador += changeArrDec[i][1]               
                }
              }
              console.log( changeArrDec[i][0] ,cambioDecimalesIterador)
              if (cambioDecimalesIterador > 0) {
                newArray.push([changeArrDec[i][0], cambioDecimalesIterador])
                cambioDecimales = cambioDecimales - cambioDecimalesIterador
                cambioDecimales = Math.round(cambioDecimales * 100) / 100
                console.log(cambioDecimales)
              }
            }
            console.log(cambioDecimales)
            console.log(arrayCentavos[i][1]-(arrayCentavos[i][1] - cambioDecimales))
            arrayCentavos[i][1] = arrayCentavos[i][1] - cambioDecimales
            console.log(arrayCentavos[i][1])
            cambioDecimales = 0
            break
          }
        }
      }

      return {
        status: "OPEN",
        change: newArray,
      }


  }

}

const calcularCidDisponible = (cid) => {
  const arrayCentavos = cid.slice(0,4)
  const arrayIntegrales = cid.slice(4)
  let totalDisponibleIntegrales = arrayIntegrales.reduce((a, b) =>{
     let c  = parseFloat(a) + parseFloat(b[1])
     return c
    }, 0);
  let totalDisponibleDecimales = arrayCentavos.reduce((a, b) =>{
      let c  = parseFloat(a) + parseFloat(b[1])
      return c
      }, 0);
  return [totalDisponibleIntegrales, totalDisponibleDecimales]
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// Shoulkd return CLOSED
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))