$(document).ready(function() {

	//select all the a tag with name equal to modal
	$('#make-refund').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
        var refundHeader = document.getElementById('Refund-Head')
        var refundButton = document.getElementById('refund-submit')
        var table = document.getElementById('claimInfoTable').rows
        refundHeader.innerHTML = "Make Refund | Claim ID: "+ table[0].cells[1].innerHTML +"|Amount Owed: " + table[table.length-5].cells[1].innerHTML

        refundButton.setAttribute('onclick','createRefund(' + table[0].cells[1].innerHTML +')')
		//Set height and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(100);
		//$('#mask').fadeTo("slow",0.8);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(200);

	});

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});


	$('#make-offset').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
        var offsetHeader = document.getElementById('Offset-Head')
        var offsetButton = document.getElementById('offset-submit')
        var table = document.getElementById('claimInfoTable').rows

        offsetHeader.innerHTML = "Make Offset | Claim ID: "+ table[0].cells[1].innerHTML +"|Amount Owed: " + table[table.length-5].cells[1].innerHTML

        offsetButton.setAttribute('onclick','createOffset('+ table[0].cells[1].innerHTML + ')')
		//Set height and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(100);
		//$('#mask').fadeTo("slow",0.8);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(200);

	});

	//if close button is clicked
	$('.window #close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

});



var apiUrl = "http://ec2-52-23-199-112.compute-1.amazonaws.com"

var empId = 2
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

            var claimEvents = document.getElementById("claim-events");
            claimEvents.innerHTML = ''

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
			$('#mask, .window').hide();
        }
    };

    xhttp.open("POST", apiUrl + ":13000/eventlog/addComment", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");

    var comment = document.getElementById('comment-input').value
    document.getElementById('comment-input').value = ''

    var table = document.getElementById('claimInfoTable').rows

    var empId = table[3].cells[1].innerHTML
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


function createRefund(claimId){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            // do reaction stuff here
			console.log(xhttp.responseText)
			getClaimEvents(claimId);
			$('#mask, .window').hide();
        }
    }
    xhttp.open("POST", apiUrl + ":13000/analysts/createRefund", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");

    var table = document.getElementById('claimInfoTable').rows
		var refundAmt = table[table.length-5].cells[1].innerHTML
    var empId = table[3].cells[1].innerHTML

    var jsonData = {
        'claimId': claimId,
        'refundAmt' : refundAmt,
        'claimStatus' : "refund",
        'employeeId' : empId,
//		'refundOwed' : refundOwed
    }

    console.log(["testing", jsonData])

    xhttp.send(JSON.stringify(jsonData));

}

function createOffset(claimId){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            // do reaction stuff here
			console.log(xhttp.responseText);
			getClaimEvents(claimId);
			getClaimInfo(claimId);
			$('#mask, .window').hide();
        }
    }
    xhttp.open("POST", apiUrl + ":13000/analysts/createOffset", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*");

    var table = document.getElementById('claimInfoTable').rows
    var empId = table[3].cells[1].innerHTML

    var jsonData = {
        'claimId': claimId,
        'claimStatus' : "offset",
        'employeeId' : empId
    }

    console.log(["testing", jsonData])

    xhttp.send(JSON.stringify(jsonData));

}

function clearOnClick(){
	document.getElementById('refund-form').elements['refund-amt'].value = ''
}
