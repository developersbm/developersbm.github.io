
	var tablinks = document.getElementsByClassName("tablinks");
	var tabcontents = document.getElementsByClassName("tabcontents");

	function opentab(tabname) {

		for(tablinks of tablinks) {
			tablink.classList.remove("activelink");
		}
		for(tabcontent of tabcontents) {
			tabcontent.classList.remove("activetab");
		}
		event.currentTarget.classList.add("activelink");
		document.getElementById(tabname).classList.add("activetab");
	}