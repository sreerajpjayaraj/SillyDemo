$(document).ready(function() {
	myJSON = '{"age" : 12,"name" : "Sreeraj"}';
	anObject = JSON.parse(myJSON);
	$('h1').append(anObject.name+" JSON supported. <br/>");

	if(typeof(Storage)!=="undefined"){
	// Yes! localStorage and sessionStorage support!
	// Some code.....
		$('h1').append("local storage supported");
	}
	else{
	// Sorry! No web storage support..
		$('h1').append("nope, no local storage");
	}
	
	
	var memos=["The"," Array"," works"];
	window.localStorage.setArray(memos);
	var testArr=window.localStorage.getArray();
	$("#text").html(testArr);
});