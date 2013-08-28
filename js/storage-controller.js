Storage.prototype.setArray = function(obj) {
	try{
	return this.setItem("AllMemos", JSON.stringify(obj));
	}catch(ex){alert('Error occured while converting JSON to string');}
}
Storage.prototype.getArray = function() {
    return JSON.parse(this.getItem("AllMemos"));
}