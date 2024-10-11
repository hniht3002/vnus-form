
const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")


const inputWithQuantity = document.querySelectorAll(".p-8")


inputWithQuantity.forEach((input, index) => {
    const inputOfInput = input.querySelector("input")
    const quantityEle = input.querySelector("#quantity")
    const quantityValue = input.querySelector("#quantity input")
    inputOfInput.onchange = () => {
        quantityEle.classList.toggle("show")
        if(!quantityEle.classList.contains("show")) {
            quantityValue.value = ""
        }
    }
})


form.onsubmit = (e) => {
    e.preventDefault();
    
    let data = {}

    inputs.forEach((i, index) => {
        const type = i.getAttribute("type")

        if(type == "text") {
            data[`${index}`] = i.value
        }

        if(type == "checkbox" || type === "radio") {
            data[`${index}`] = i.checked
        }
    })

    console.log(data)
    fetch('https://script.google.com/macros/s/AKfycbwGQZqpP4OYqiN-DMp8Ro5U5Wxo810HbNte0yBgsbvxkL2a048IqBJ_X_dAUvwIj1Wy/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(data) // Convert the object to JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Data sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending data!');
    });
}