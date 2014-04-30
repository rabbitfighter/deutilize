
function deutilize() {
	
	var utilize = ["utilize","Utilize","utilise","Utilise","utilizing","Utilizing","utilizable","Utilizable","utilization","Utilization"];
	var use = ["use","Use","use","Use","using","Using","usable","Usable","use","Use"];

	for (var x = 0; x < utilize.length; x++) {
		var find = utilize[x];
		var repl = use[x];
		var page = document.body.innerHTML;
		while (page.indexOf(find) >= 0) {
			var i = page.indexOf(find);
			var j = find.length;
			page = page.substr(0,i) + repl + page.substr(i+j);
			document.body.innerHTML = page;
		}
	}	
	
}


deutilize();