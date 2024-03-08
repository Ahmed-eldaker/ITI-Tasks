var names = [];
var ages = [];
do {
  var numOfPeople = prompt("Enter the no.of people");
} while (isNaN(numOfPeople) || !numOfPeople);
var userNum = Number(numOfPeople);
for (var i = 0; i < userNum; i++) {
  do {
    var userName = prompt("please enter user name " + (i + 1));
  } while (isFinite(userName) || userName.length < 2 || !userName);

  names.push(userName);

  do {
    var userAge = prompt("please enter user age " + (i + 1));
  } while (isNaN(userAge) || userAge < 18 || userAge > 60 || !userAge);

  ages.push(userAge);
}
var tbody = document.getElementsByTagName("tbody")[0];
for (var i = 0; i < numOfPeople; i++) {
  tbody.innerHTML += `<tr>
 <td>${names[i]}</td>
 <td>${ages[i]}</td>
 </tr>`;
}
