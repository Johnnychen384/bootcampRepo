let cartTotal = 16.07
let donatedTotal = Math.ceil(cartTotal)
console.log(donatedTotal)
let donation = (donatedTotal - cartTotal).toFixed(2)
console.log(donation)
