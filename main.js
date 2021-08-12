function change(){
    let randomColor1=Math.floor(Math.random() * 256);
    let randomColor2=Math.floor(Math.random() * 256);
    let randomColor3=Math.floor(Math.random() * 256);
    document.getElementById("body").style.backgroundColor="rgb("+randomColor1+","+randomColor2+","+randomColor3+")";
    console.log(randomColor);
}
function changeMe(){
    let home=document.getElementById("navHome");
    home.classList.toggle("rosa");
    console.log(123);
}
function getData(){
    console.log(document.getElementById("vorname").value);
    console.log(document.getElementById("nachname").value);
    console.log(document.getElementById("land").value);
}