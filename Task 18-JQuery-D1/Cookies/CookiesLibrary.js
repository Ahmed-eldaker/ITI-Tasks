//set cookie
function setCookie(key, value, expireDate) {
  // var date = new Date();
  document.cookie = `${key} = ${value} ; expires = ${expireDate}`;
}
getCookie;
function getCookie(key) {
  //string -> 'username=ahmed; age=25; salary=100; hamada=hamada'
  //"age" === " age"
  var arr = document.cookie.split("; ");
  //console.log(arr); //['username=ahmed', 'age=25'];
  var result = false;
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i].split("=")); //0 1  ..........
    var keyCheck = arr[i].split("="); // 0 -> ['username', 'ahmed'] 1 ->['age' , '25']
    if (keyCheck[0] === key) {
      result = keyCheck[1];
    }
  }
  //   arr.forEach(function (ele) {
  //     var keyCheck = ele.split("="); // 0 -> ['username', 'ahmed'] 1 ->['age' , '25']
  //     if (keyCheck[0] === key) {
  //       result = keyCheck[1];
  //     }
  //   });

  return result;
}
function deleteCookie(key) {
  //   var oldDate = new Date(1999, 11, 10);
  document.cookie = `${key} = hamada ; expires = ${new Date(1999, 11, 10)}`;
}
