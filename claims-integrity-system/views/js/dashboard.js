var CLAIMSCOLLECTION = null;

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {

        var claims = JSON.parse(xhttp.responseText)
        var groupOfClaims = document.createElement("div")
        groupOfClaims.setAttribute("class","list-group")
        document.getElementById("claims-list").appendChild(groupOfClaims)

        for( var i = 0; i < claims.length; i++){
            console.log(claims[0])
            var entry = document.createElement("a")
            entry.setAttribute("class", "list-group-item")
            var claimId = document.createTextNode("Claim ID:"+ claims[i].id)
            var claimRequester = document.createTextNode("Requester:" + claims[i].requester);
            entry.appendChild(claimId);
            entry.appendChild(document.createElement("br"))
            entry.appendChild(claimRequester);
            groupOfClaims.appendChild(entry);
        }


    }
  };
  xhttp.open("POST", "http://ec2-54-87-167-86.compute-1.amazonaws.com:13000/analysts/reqAnalystClaims", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
  xhttp.send('{"analystId":"1"}');
}

function getClaimInfo(){

}
