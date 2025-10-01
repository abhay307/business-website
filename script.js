var tl = gsap.timeline();

var portTypChild = document.querySelector(".portTypChild")

function portani() {
    gsap.to('.portChildHide', {
        position: 'absolute',
        bottom: 15,
        duration: 0.5,
    })

    gsap.from('.portChildHideLbl p', {
        x: -50,
        duration: 0.5,
        delay: 0.5,
        opacity: 0
    })

    gsap.from('.portChildHideLbl h5', {
        x: 50,
        duration: 0.5,
        delay: 0.5,
        opacity: 0
    })

    gsap.from('.portChildHidIcon', {
        x: 50,
        duration: 0.5,
        delay: 0.5,
        opacity: 0
    })
}

portTypChild.addEventListener("mouseenter", portani);


let branding = document.querySelector("#branding");
let brandingimg = document.querySelector("#brandingimg");
let appbtn = document.querySelector("#appbtn");
let webbtn = document.querySelector("#webbtn");
let picbtn = document.querySelector("#picbtn");


branding.addEventListener("click", (e) => {
    if (e.target.className === picbtn) {
        e.target.style.display = "none"
    }
    e.preventDefault()
})


const hamburger = document.getElementById("hamburger");
const close = document.querySelector(".close");
const hdr2 = document.querySelector(".hdr-2-links");

hamburger.addEventListener("click", (e) => {
    hdr2.style.display = "flex"
});
close.addEventListener("click", (e) => {
    hdr2.style.display = "none"
});


