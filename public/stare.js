function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
};

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").Value;
    formData["lname"] = document.getElementById("lname").Value;
    formData["e-mail"] = document.getElementById("e-mail").Value;
    formData["amount"] = document.getElementById("amount").Value;
    formData["instalment"] = document.getElementById("instalment").Value;
    formData["balance"] = document.getElementById("balance").Value;
    formData["radio"] = document.getElementById("radio").Value;
    formData["check"] = document.getElementById("check").Value;
    return formData;
};
function insertNewRecord(data) {
    var table = document.getElementById("userList").getElementsByTagName(tbody)[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fname;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fname;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.fname;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.fname;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.fname;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a>approve</a>
                         <a>Delete</a>`;
};