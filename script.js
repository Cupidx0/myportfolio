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
window.onload = function(){
    const canvas = document.getElementById("portId");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ncard = {
        x: canvas.width/4,
        y:canvas.height/4,
        radius: 40,
        dx:4,
        dy:4,
        color : "red"
    };
    function cardDrawing(){
        ctx.beginPath();
        ctx.arc(ncard.x, ncard.y, ncard.radius, 0, Math.PI * 2);
        ctx.fillStyle = ncard.color;
        ctx.fill();
        ctx.closePath();
    }
    function update(){
        ncard.x = ncard.dx;
        ncard.y = ncard.dy;
        if(ncard.x - ncard.radius <=0 || ncard.x + ncard.radius >= canvas.width){
            ncard.dx *= -1;
        }
        if(ncard.y - ncard.radius <=0 || ncard.y + ncard.radius >= canvas.height){
            ncard.dy *= -1;
        }

    }
    function final(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        cardDrawing();
        update();
        requestAnimationFrame(final);
    }
    final();
};
function movings(){
    const card = document.querySelector('#card');
    let newX = 0, newY = 0;
    let animationFrame;
    if(card){
        card.addEventListener("touchstart",(e)=>{
            let touch = e.touches[0];
            let startX = touch.clientX   - newX;
            let startY = touch.clientY - newY;
            function moveHandler(e){
                let touchMove = e.touches[0];
                newX = touchMove.clientX - startX;
                newY = touchMove.clientY - startY;
                if(!animationFrame){
                    animationFrame = requestAnimationFrame(()=>{
                        card.style.transform = `translate(${newX}px,${newY}px)`;
                        card.style.position = 'absolute';
                        animationFrame = null;
                        console.log(card.style.transform);
                    });
                }
            }
            //implement movement functionality
            function endHandler(){
                document.removeEventListener("touchmove", moveHandler);
                document.removeEventListener("touchend", endHandler);
            }
            document.removeEventListener("touchmove", moveHandler);
            document.removeEventListener("touchend", endHandler);
        });
    }
}
movings();