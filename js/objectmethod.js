// object
var details = {
    name: "acer",
    ram: '4GB',
    generation: "i7",
}

// console.log(Object.keys(details))
// ['name', 'ram', 'generation']
// console.log(Object.values(details))
// console.log(typeof(details))
var deserialization = JSON.stringify(details)
console.log(typeof(deserialization))
console.log(deserialization)

var serialization = JSON.parse(deserialization)
console.log(typeof(serialization))
console.log(serialization)

// for in
// for (var i in details) {
    // console.log(i)
    // console.log(details)
    // console.log(details[i])
    // details['name']
    // details['ram']
    // details['generation']
// }