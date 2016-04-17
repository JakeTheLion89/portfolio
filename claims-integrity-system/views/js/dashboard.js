function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("claim-list").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", "http://ec2-54-87-167-86.compute-1.amazonaws.com:13000/analysts/getAnalystClaims", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
  xhttp.send("{'analystId':'1'}");
}
