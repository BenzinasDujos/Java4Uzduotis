function getMessages(){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				var myArr = JSON.parse(this.responseText);
        		toLinks(myArr);
        		//UpdateUser(myArr);
			}
			if(xhr.status == 400)
			{
				console.log('File not found');
			}
		}
	};

	xhr.open('get','http://localhost:8080/messengerr/webapi/messages',true);
	xhr.send();

}
function toLinks(arr)
{
	var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="http://localhost:8080/messengerr/webapi/messages/' + arr[i].id + '">' + arr[i].id + "  " +
        arr[i].author + '</a><br>';
    }
    document.getElementById("getMs").innerHTML = out;
}
/////////////////////////////////////// USER
function AddMessages(obj){
	//alert("Message added: " + myJSON); 
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8080/messengerr/webapi/messages', true);
	xhr.setRequestHeader('Content-type', 'application/json');
		
	var author = document.getElementById("author").value;
	var message = document.getElementById("message").value;

	var obj = { message: message, author: author};
	  var myJSON = JSON.stringify(obj);
	  xhr.send(myJSON);
	  
	  alert("Message added: " + myJSON); 
}
function DeleteMessages(obj) {
  var xhrs = new XMLHttpRequest();
  var id = document.getElementById("id").value;

  xhrs.open('DELETE', 'http://localhost:8080/messengerr/webapi/messages/'+id);  
  xhrs.send();

  alert("Message which had number " + id + " " + "was deleted");

}

function UpdateMessages(arr) {
	/*var i;
	const xhr = new XMLHttpRequest();
	var id2 = document.getElementById("id2").value;
	xhr.open('PUT', 'http://localhost:8080/messengerr/webapi/messages/'+id2,true);
	//xhr.send();
	xhr.setRequestHeader('Content-type', 'application/json');
	var author2 = document.getElementById("author2").value;
	var message2 = document.getElementById("message2").value;
	var obj = { message2: message2, author2: author2};
	  var myJSON = JSON.stringify(obj);
	  xhr.send(myJSON);
	  alert(myJSON);
	  for (i = 0; i < arr.length; i++) {
           if (arr[i].id == id2) {
           	arr[i].author = author2;
           	arr[i].message = message2;
        }
   	  }
	  alert("Message updated!");*/

	  var url = "http://localhost:8080/messengerr/webapi/messages";

	  var data = {};
	  data.author2 = "Adomce";
	  data.message2 = "Adomasss123456";
	  //data.id2 = document.getElementById("id2").value;
	  //data.author2 = document.getElementById("author2").value;
	  //data.message2 = document.getElementById("message2").value;
	  var json = JSON.stringify(data);
      alert(json);
	  var xhr = new XMLHttpRequest();
	  //xhr.open("PUT", url+'/'+id2, true);
	  xhr.open("PUT", url+'/5', true);
	  xhr.setRequestHeader('Content-type','application/json');
	  xhr.onload = function () {
		  //var messages = JSON.parse(xhr.responseText);
		  if (xhr.readyState == 4 && xhr.status == 200) {
		  	  var messages = JSON.parse(xhr.responseText);
			  console.table(messages);
		  } 
		  else {
			  console.error(messages);
		  }
	  }
	xhr.send(json);
	alert("Message updated!");
}