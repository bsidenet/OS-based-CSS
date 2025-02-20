(function() {
  function getOS() {
    const platform = window.navigator.platform;
    const userAgent = window.navigator.userAgent;
    if (/(Macintosh|MacIntel|MacPPC|Mac68K)/.test(platform)) { return "macos"; }
    if (/(iPhone|iPad|iPod)/.test(platform)) { return "ios"; }
    if (/(Win32|Win64|Windows|WinCE)/.test(platform)) { return "windows"; }
    if (/Android/.test(userAgent)) { return "android"; }
    if (/Linux/.test(platform)) { return "linux"; }
    return "unknown-os";
  }

  async function getBrowser() {
    const userAgent = navigator.userAgent;
    if (/Firefox/.test(userAgent)) { return "firefox"; }
    if (/SamsungBrowser/.test(userAgent)) { return "samsung"; }
    if (/Opera|OPR/.test(userAgent)) { return "opera"; }
    if (/Trident/.test(userAgent)) { return "ie"; }
    if (/Edge/.test(userAgent)) { return "edge"; }
    if (/Chrome/.test(userAgent)) { return "chrome"; }
    if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) { return "safari"; }
    if (navigator.brave && (await navigator.brave.isBrave())) { return "brave"; }
    if (/Vivaldi/.test(userAgent)) { return "vivaldi"; }
    if (/MiuiBrowser/.test(userAgent)) { return "miui"; }
    if (/DuckDuckGo/.test(userAgent)) { return "duckduckgo"; }
    if (/Ghostery/.test(userAgent)) { return "ghostery"; }
    if (/Onion/.test(userAgent)) { return "onion"; }
    return "unknown-browser";
  }

  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  async function applyStyles() {
    const element = document.querySelector(".titulo-DV");
    if (!element) { return; }

    const os = getOS();
    const browser = await getBrowser();
    const classes = [os, browser];
    
    if (os && browser) {
      classes.push(`${os}-${browser}`);
    }
    if (isMobileDevice()) {
      classes.push("mobile-device");
    }
    
    element.classList.add(...classes);
    element.setAttribute("data-os-browser", `${os} / ${browser}`);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyStyles().catch((err) => {
      if (typeof console !== "undefined" && console.error) {
        console.error(err);
      }
    });
  });
})();
