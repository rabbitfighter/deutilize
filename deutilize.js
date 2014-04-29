// there is obviously a better way to do this
// I will find it later

function deutilize() {
	
	var find = "utilize";
	var repl = "use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "Utilize";
	var repl = "Use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "utilise";
	var repl = "use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "Utilise";
	var repl = "Use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "utilizing";
	var repl = "using";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "Utilizing";
	var repl = "Using";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "utilizable";
	var repl = "usable";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "Utilizable";
	var repl = "Usable";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "utilization";
	var repl = "use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
	
	var find = "Utilization";
	var repl = "Use";
	var page = document.body.innerHTML;
	while (page.indexOf(find) >= 0) {
		var i = page.indexOf(find);
		var j = find.length;
		page = page.substr(0,i) + repl + page.substr(i+j);
		document.body.innerHTML = page;
	}
}

deutilize();