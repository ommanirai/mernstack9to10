// function welcome(name, address) {
//     // name is parameter
//     console.log("Hi " + name + " welcome to " + address)
// }

// welcome(null, "Vedu")
// Raju is argument
// welcome("Sujal", "Animax")
// welcome()
// welcome()
// welcome()


// function welcome(name, address, phone, email, status) {
//     // name is parameter
//     console.log("Hi " + name + " welcome to " + address + " phoen: " + phone + " email: " + email + " status: " + status)
// }

// welcome("Raj", "Vedu", "demo@gmail.com", 984242343, "active")

function welcome(details) {
    console.log("what comes in details: ", details)
    // name is parameter
    // console.log("Hi " + details.name + " welcome to " + details.address + " phoen: " + details.phone + " email: " + details.email + " status: " + details.status)

    console.log("Hi " + details[0] + " welcome to " + details[1] + " phoen: " + details[2] + " email: " + details[3] + " status: " + details[4])
}
var d = {
    email: "demo@gmial.com",
    name: "Raj",
    address: "Lalitpur",
    phone: 98234234,
    status: "active"
}

var det = ['Raj', "Bkt", "98233242", 'dmeo@gmail.com', "active"]
welcome(det)

// task
// welcome(det)


// welcome({
//     name: "Raj",
//     address: "Lalitpur",
//     phone: 98234234,
//     email: "demo@gmial.com",
//     status: "active"
// })