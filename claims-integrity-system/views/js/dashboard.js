

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
            entry.setAttribute("onclick","getClaimInfo("+ claims[i].id+")")
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
  xhttp.send('{"analystId":"2"}');
}

function getClaimInfo(claimId){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var claimInfo = document.getElementById("claim-info");
            claimInfo.innerHTML = ""
            var claimData = JSON.parse(xhttp.responseText);

            var table = document.createElement("TABLE");
            table.setAttribute('id','claimInfoTable');
            document.getElementById('claim-info').appendChild(table)
            var claimData = claimData.claim;
            console.log(claimData)
            //var keys = Object.keys(claimData)
            var keys = [];

            for(var k in claimData) keys.push(k);
            console.log(keys)

            for(var i = 0; i < keys.length; i++){
                var row = document.createElement('tr');
                table.appendChild(row)
                var cell1 = document.createElement('td');
                cell1.innerHTML = keys[i]
                row.appendChild(cell1);
                var cell2 = document.createElement('td');
                cell2.innerHTML = claimData[keys[i]]
                row.appendChild(cell2);
            };

        };
    }

    xhttp.open("POST", "http://ec2-54-87-167-86.compute-1.amazonaws.com:13000/analysts/getFullClaimData", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    var jsonData = {'claimId': claimId}
    xhttp.send(JSON.stringify(jsonData));

}
