let wraper=document.getElementsByClassName('wrapper')[0];
let template=document.getElementsByTagName('template')[0];

let names = ["Nameer","Hanzla","Sami"]
let color =["#000000","#FF0000","#FFFF00","#00FF00","#00FFFF"]


let sticker = function(name){
    let div = template.content.querySelector("div")
    let nameofStick = div.querySelector(".name")
    nameofStick.innerHTML = name;

    div.style.background = color[Math.floor(Math.random()*color.length)]
    div.style.transform = "rotate("+(Math.random()*40-20)+"deg)"

    let node = document.importNode(div,true)
    wraper.appendChild(node)
}
setTimeout(() => {
    location.reload()
}, 1000);

names.forEach(sticker)