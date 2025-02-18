/*
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
*/

document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Detecção de tipo de dispositivo
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
        document.body.classList.add("mobile-device");
        
        // Detecção de sistema operacional móvel
        if (/iphone|ipad|ipod/.test(userAgent)) {
            document.body.classList.add("ios");
            
            // Detecção de versão do iOS (aproximada)
            const iosVersionMatch = userAgent.match(/os (\d+)[_.](\d+)/);
            if (iosVersionMatch) {
                const majorVersion = iosVersionMatch[1];
                document.body.classList.add(`ios-${majorVersion}`);
                document.body.dataset.iosVersion = `${iosVersionMatch[1]}.${iosVersionMatch[2]}`;
            }
        } else if (userAgent.includes("android")) {
            document.body.classList.add("android");
            
            // Detecção de versão do Android
            const androidVersionMatch = userAgent.match(/android (\d+)[.](\d+)/);
            if (androidVersionMatch) {
                const majorVersion = androidVersionMatch[1];
                document.body.classList.add(`android-${majorVersion}`);
                document.body.dataset.androidVersion = `${androidVersionMatch[1]}.${androidVersionMatch[2]}`;
            }
        }
    } else {
        document.body.classList.add("desktop-device");
        
        // Detecção de sistema operacional desktop via User Agent (fallback)
        if (userAgent.includes("windows nt 10")) {
            document.body.classList.add("windows", "windows-10");
        } else if (userAgent.includes("windows nt 6.3")) {
            document.body.classList.add("windows", "windows-8-1");
        } else if (userAgent.includes("windows nt 6.2")) {
            document.body.classList.add("windows", "windows-8");
        } else if (userAgent.includes("windows nt 6.1")) {
            document.body.classList.add("windows", "windows-7");
        } else if (userAgent.includes("win")) {
            document.body.classList.add("windows");
        } else if (userAgent.includes("mac os x")) {
            document.body.classList.add("macos");
            const macOSVersionMatch = userAgent.match(/mac os x (\d+)[_.](\d+)[_.](\d+)/);
            if (macOSVersionMatch) {
                const majorVersion = macOSVersionMatch[1];
                document.body.classList.add(`macos-${majorVersion}`);
                document.body.dataset.macosVersion = `${macOSVersionMatch[1]}.${macOSVersionMatch[2]}.${macOSVersionMatch[3]}`;
            }
        } else if (userAgent.includes("linux")) {
            document.body.classList.add("linux");
            if (userAgent.includes("ubuntu")) {
                document.body.classList.add("ubuntu");
            } else if (userAgent.includes("fedora")) {
                document.body.classList.add("fedora");
            } else if (userAgent.includes("debian")) {
                document.body.classList.add("debian");
            }
        } else {
            document.body.classList.add("unknown-os");
        }
    }
    
    // Detecção de navegador
    if (userAgent.includes("firefox")) {
        document.body.classList.add("firefox");
    } else if (userAgent.includes("edg")) {
        document.body.classList.add("edge");
    } else if (userAgent.includes("chrome")) {
        document.body.classList.add("chrome");
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        document.body.classList.add("safari");
    } else if (userAgent.includes("opera") || userAgent.includes("opr")) {
        document.body.classList.add("opera");
    }
    
    // Detecção de recursos (feature detection)
    if ('ontouchstart' in window) {
        document.body.classList.add("touch-device");
    }
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("prefers-dark-mode");
    }
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add("prefers-reduced-motion");
    }
    
    // Uso da API moderna User-Agent Client Hints (quando disponível)
    if ('userAgentData' in navigator) {
        navigator.userAgentData.getHighEntropyValues(["platform", "platformVersion"])
        .then(data => {
            const platform = data.platform.toLowerCase();
            
            if (platform.includes("windows")) {
                document.body.classList.add("windows");
                document.body.dataset.osVersion = data.platformVersion;
                
                // Limpar versões baseadas em user agent e usar a versão mais precisa
                const windowsVersionClasses = Array.from(document.body.classList)
                    .filter(cls => cls.startsWith('windows-'));
                windowsVersionClasses.forEach(cls => document.body.classList.remove(cls));
                
                const majorVersion = parseInt(data.platformVersion.split('.')[0]);
                if (majorVersion) {
                    document.body.classList.add(`windows-${majorVersion}`);
                }
            } else if (platform.includes("linux")) {
                document.body.classList.add("linux");
            } else if (platform.includes("macos")) {
                document.body.classList.add("macos");
                document.body.dataset.osVersion = data.platformVersion;
                
                const majorVersion = parseInt(data.platformVersion.split('.')[0]);
                if (majorVersion) {
                    // Limpar versões baseadas em user agent
                    const macosVersionClasses = Array.from(document.body.classList)
                        .filter(cls => cls.startsWith('macos-'));
                    macosVersionClasses.forEach(cls => document.body.classList.remove(cls));
                    
                    document.body.classList.add(`macos-${majorVersion}`);
                }
            }
        })
        .catch(error => {
            console.warn("Falha ao obter informações detalhadas da plataforma:", error);
        });
        
        // Detecção de navegador com Client Hints
        navigator.userAgentData.brands.forEach(brand => {
            const brandName = brand.brand.toLowerCase();
            if (brandName.includes("chrome")) {
                document.body.classList.add("chrome");
                document.body.dataset.chromeVersion = brand.version;
            } else if (brandName.includes("firefox")) {
                document.body.classList.add("firefox");
                document.body.dataset.firefoxVersion = brand.version;
            } else if (brandName.includes("edge")) {
                document.body.classList.add("edge");
                document.body.dataset.edgeVersion = brand.version;
            }
        });
    }
    
    // Log das classes adicionadas para depuração
    console.log("Classes de OS/dispositivo adicionadas:", document.body.classList);
});
