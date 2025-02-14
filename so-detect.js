document.addEventListener("DOMContentLoaded", function () {
	let os = navigator.platform.toLowerCase();

	if (os.includes("win")) {
		document.body.classList.add("windows");
	} else if (os.includes("mac") || os.includes("linux")) {
		document.body.classList.add("unix"); // Grupo para macOS e Linux
	}
});
