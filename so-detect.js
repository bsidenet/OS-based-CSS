document.addEventListener("DOMContentLoaded", function () {
	let os = navigator.platform.toLowerCase();
	
	if (os.includes("win")) {
		document.body.classList.add("windows");
	} else if (os.includes("linux")) {
		document.body.classList.add("linux");
	} else if (os.includes("mac")) {
		document.body.classList.add("macos");
  }
});
