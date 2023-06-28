function selectedItem(code,itemName, price) {
    document.getElementById('code').value = code;
    document.getElementById('itemName').value = itemName;
    document.getElementById('price').value = price;
}

function Create(e) {
    e.preventDefault();

    // Get the form value
    const code = document.getElementById('code').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const itemName = document.getElementById('itemName').value;
    const price = document.getElementById('price').value;

    // Save Data Object
    const data = {
        code: code,
        fullname: fullname,
        email: email,
        phone: phone,
        itemName: itemName,
        price: price
    }

    const formData = JSON.parse(localStorage.getItem('data',)) || [];

    if (formData) {
        alert('Sucessfully ordered, please wait for confirmation');
        // Push to array
        formData.push(data)
    }



    // Save the updated array
    const jsonArray = JSON.stringify(formData);
    localStorage.setItem('data', jsonArray);


    order.reset();
    console.log(formData);
}

const order = document.getElementById('pesan');
order.addEventListener('submit', Create);
