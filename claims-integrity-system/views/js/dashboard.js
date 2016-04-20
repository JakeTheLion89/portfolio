var empId = '2'
var apiUrl = "http://ec2-52-23-199-112.compute-1.amazonaws.com"


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
  xhttp.open("POST", apiUrl + ":13000/analysts/reqAnalystClaims", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
  xhttp.send(JSON.stringify({analystId:empId}));
}

function getClaimEvents(claimId){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // first clear slate and  make show interface
            // to change claim's responsible analystId
            claimEvents.innerHTML = ""
            

            var claimEvents = document.getElementById("claim-events");

            var eventData = JSON.parse(xhttp.responseText);
            console.log(eventData);
            var groupOfEvents = document.createElement("div")
            groupOfEvents.setAttribute("class","list-group")
            claimEvents.appendChild(groupOfEvents)

            for(var i = 0; i < eventData.length; i++){
                var entry = document.createElement("a");
                entry.setAttribute("class", "list-group-item");
                var commenterId = document.createTextNode("CommenterID:"+ eventData[i].employee_id);
                var comment = document.createTextNode("Comment:" + eventData[i].comment);

                entry.appendChild(commenterId);
                entry.appendChild(document.createElement("br"));
                entry.appendChild(comment);
                groupOfEvents.appendChild(entry);
            }
        };
    };
    xhttp.open("POST", apiUrl + ":13000/eventlog/getEvents", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    var jsonData = {'claimId': claimId}
    xhttp.send(JSON.stringify(jsonData));
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
            var claim = claimData.claim;
            console.log(claim)
            //var keys = Object.keys(claimData)
            var keys = [];

            for(var k in claim) keys.push(k);
            console.log(keys)

            for(var i = 0; i < keys.length; i++){
                var row = document.createElement('tr');
                table.appendChild(row)
                var cell1 = document.createElement('td');
                cell1.innerHTML = keys[i]
                row.appendChild(cell1);
                var cell2 = document.createElement('td');
                cell2.innerHTML = claim[keys[i]]
                row.appendChild(cell2);
            };
            getClaimEvents(claimId)

            var commentButton = document.getElementById('comment-poster');
            var deleteButton = document.getElementById('comment-deleter')
            commentButton.setAttribute('onclick','postComment('+ claim.id +')')
            deleteButton.setAttribute('onclick','deleteAllClaimEvents('+ claim.id +')')

        };
    }

    xhttp.open("POST", apiUrl + ":13000/analysts/getFullClaimData", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    var jsonData = {'claimId': claimId}
    xhttp.send(JSON.stringify(jsonData));

}

function postComment(claimId){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            getClaimEvents(claimId);
        }
    };

    xhttp.open("POST", apiUrl + ":13000/eventlog/addComment", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");

    var comment = document.getElementById('comment-input').value

    var jsonData = {
        comment:comment,
        analystId:empId,
        claimId:claimId
    }

    console.log(jsonData)

    xhttp.send(JSON.stringify(jsonData));
}


function deleteAllClaimEvents(claimId){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            getClaimEvents(claimId);
        }
    };

    xhttp.open("POST", apiUrl + ":13000/eventlog/deleteAllClaimEvents", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");

    var comment = document.getElementById('comment-input').value

    var jsonData = {
        claimId:claimId
    }

    console.log(jsonData)

    xhttp.send(JSON.stringify(jsonData));
}
