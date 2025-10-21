// var tl = gsap.timeline();

// var portTypChild = document.querySelector(".portTypChild")

// function portani(){
   
// gsap.to('.portChildHide',{
//     position : 'absolute',
//     bottom : 15,
//     duration : 0.5,
// })

// gsap.from('.portChildHideLbl p', {
//     x : -50,
//     duration : 0.5,
//     delay : 0.5,
//     opacity : 0
// })

// gsap.from('.portChildHideLbl h5', {
//     x : 50,
//     duration : 0.5,
//     delay : 0.5,
//     opacity : 0
// })

// gsap.from('.portChildHidIcon', {
//     x : 50,
//     duration : 0.5,
//     delay : 0.5,
//     opacity : 0
// })
    
// }
 

// // portTypChild.addEventListener("mouseenter",portani);






// let portTypChild = document.querySelectorAll('.portTypChild')
// let portChildHide = document.querySelector('.portChildHide')
// let portTyps = document.querySelector('.portTyps')

// let b = [...portTypChild]
// // b.map((elem)=>{
// //     elem.addEventListener('mouseenter',function(e){
// //         portChildHide.style.display = 'flex'
// //         portani()
// //     })
// //     elem.addEventListener('mouseleave',function(e){
// //         portChildHide.style.display = 'none'
// //         portani()
// //     })
// // })

// b.map((elem)=>{
//     elem.addEventListener('mouseenter',function(e){
//         portChildHide.style.display = 'flex'
//         portani()
// })
// })

// portTyps.addEventListener('click',function(e){
//     let gg = e.target.parentElement
//    if(gg.className = 'portTypChild'){
//      portChildHide.style.display = 'flex'
//         portani()
//    }
// })

let branding = document.querySelector("#branding");
let brandingimg = document.querySelector(".brandingimg");
let appbtn = document.querySelector("#appbtn");
let webbtn = document.querySelector("#webbtn");
let picbtn = document.querySelector("#picbtn");


branding.addEventListener("click",(e)=>{
    brandingimg.style.display ="none"
})