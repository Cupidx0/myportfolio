function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    const darkModeEnabled = element.classList.contains("dark-mode");
    setCookie("darkMode", darkModeEnabled, 365);
}

function applyDarkModeFromCookie() {
    const darkMode = getCookie("darkMode");
    if (darkMode === "true") {
        document.body.classList.add("dark-mode");
    }
}

function handleCookieConsent() {
    document.addEventListener("DOMContentLoaded", function() {
        const cookieBanner = document.getElementById("cookies");
        const acceptButton = document.getElementById("acceptbutton");
        const rejectButton = document.getElementById("rejectbutton");
        const cookieConsent = localStorage.getItem("cookieConsent");

        if (!cookieConsent && acceptButton) {
            cookieBanner.style.display = "block";
            if (acceptButton) {
                acceptButton.addEventListener("click", () => {
                    cookieBanner.style.display = "none";
                    localStorage.setItem("cookieConsent", "true");
                });
            }
            if (rejectButton) {
                rejectButton.addEventListener("click", () => {
                    cookieBanner.style.display = "none";
                    localStorage.setItem("cookieConsent", "false");
                });
            }
        } else {
            cookieBanner.style.display = "none";
        }

        applyDarkModeFromCookie();
    });
}

handleCookieConsent();
function ndate(){
    const d = new Date();
    const n = d.getFullYear();
    document.getElementById('ndate').innerHTML = n;
    console.log(n);
}
ndate();

function comingSoon(){
    const coming = document.getElementById('coming');
    const coming1 = document.getElementById('coming1');
    const coming2 = document.getElementById('coming2');
    coming.addEventListener("click",{
        handleEvent: function(event) {
            event.preventDefault();
            const target = event.target.closest('a');
            if (target) {
                const href = target.getAttribute('href');
                if (href) {
                    coming.style.backgroundColor = "red";
                    coming.style.color = "white";
                    window.location.id = coming1;
                    alert("This page is coming soon!");
                }
            }
        }
    });
    coming1.addEventListener("click",{
        handleEvent: function(event) {
            event.preventDefault();
            const target = event.target.closest('a');
            if (target) {
                const href = target.getAttribute('href');
                if (href) {
                    window.location.id = coming1;
                    coming1.style.backgroundColor = "red";
                    coming1.style.color = "white";
                    alert("This page is coming soon!");
                }
            }
        }
    });
    coming2.addEventListener("click",{
        handleEvent: function(event) {
            event.preventDefault();
            const target = event.target.closest('a');
            if (target) {
                const href = target.getAttribute('href');
                if (href) {
                    window.location.id = coming1;
                    coming2.style.backgroundColor = "red";
                    coming2.style.color = "white";
                    alert("This page is coming soon!");
                }
            }
        }
    });
}
comingSoon();