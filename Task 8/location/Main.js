// var search = location.search;
// var dataSplit = search.split("&");
// var addressSplit = dataSplit[0];
// var genderSplit = dataSplit[1];
// var emailSplit = dataSplit[2];
// var mobileSplit = dataSplit[3];
// var address = addressSplit.split("=")[1];
// var gender = genderSplit.split("=")[1];
// var email = emailSplit.split("=")[1];
// var mobile = mobileSplit.split("=")[1];
var dataView = document.getElementById("dataView");
dataView.innerHTML = `<h2>Address = ${address}</h2>
 <h2>Gender = ${gender}</h2>
 <h2>Email = ${email}</h2>
 <h2>Mobile = ${mobile}</h2>`;
