document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let osClass = "", browserClass = "", extraClasses = [];

    // Detetar sistema operativo
    if (navigator.userAgent.indexOf("Win") !== -1) osClass = "windows";
    else if (navigator.userAgent.indexOf("Mac") !== -1) osClass = "macos";
    else if (navigator.userAgent.indexOf("Linux") !== -1) osClass = "linux";

    // Detetar versões específicas do sistema operativo
    if (osClass === "windows") {
        if (navigator.userAgent.indexOf("Windows NT 10") !== -1) extraClasses.push("windows-10");
        if (navigator.userAgent.indexOf("Windows NT 11") !== -1) extraClasses.push("windows-11");
    }
    if (osClass === "macos") {
        let macVersion = navigator.userAgent.match(/Mac OS X (\d+)_(\d+)/);
        if (macVersion) {
            let macMajor = parseInt(macVersion[1], 10);
            if (macMajor >= 11) extraClasses.push(`macos-${macMajor}`);
        }
    }

    // Detetar browser
    if (/Chrome/.test(navigator.userAgent) && !/Edg/.test(navigator.userAgent)) browserClass = "chrome";
    else if (/Firefox/.test(navigator.userAgent)) browserClass = "firefox";
    else if (/Edg/.test(navigator.userAgent)) browserClass = "edge";
    else if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) browserClass = "safari";
    else if (/Opera|OPR/.test(navigator.userAgent)) browserClass = "opera";

    // Detetar dispositivos móveis
    if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
        extraClasses.push("mobile-device");
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) extraClasses.push("ios");
        if (/Android/.test(navigator.userAgent)) extraClasses.push("android");
    }

    // Detetar touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
        extraClasses.push("touch-device");
    }

    // Preferências de acessibilidade
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) extraClasses.push("prefers-dark-mode");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) extraClasses.push("prefers-reduced-motion");

    // Adicionar todas as classes ao <body>
    body.classList.add(osClass, browserClass, ...extraClasses);
});
