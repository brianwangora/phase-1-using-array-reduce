const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const reducer = (accumulator, item=Number()) => {
    console.log(accumulator, item)
    let totalBatteries =  item
    return accumulator+= totalBatteries
}
let totalBatteries = batteryBatches.reduce(reducer, 0)