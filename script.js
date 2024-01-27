




const t1 = gsap.timeline();
t1.from("#body", {
    x: "-100%",
    opacity: 0,
    ease: "back.out",
},)
t1.from(".container", {
    x: "-100%",
    opacity: 0,
    ease: "back.out",
},"akash")
t1.from("#text1", {
    x: "-100%",
    opacity: 0,
    ease: "back.out",
},)
t1.from("#button", {
    y: "-100%",
    opacity: 0,
    ease: "back.out",
},)
t1.from(".jokes-area", {
    x: "100%",
    opacity: 0,
    ease: "back.out",
},)
t1.from("#button2", {
    y: "-100%",
    opacity: 0,
    ease: "back.out",
},)


// animation end 


// main logic started 
const quote =document.getElementById("jokes");
const url = "https://api.quotable.io/random";
async function getJokes(url) {
    const response = await fetch(url);
    const data = await response.json();
    const joke = data.content;
    quote.innerHTML=joke;
    
}
getJokes(url);

function akash(){
    quote.value.select();
    // quote.select();
    document.execCommand("copy");
    alert("Text has been copied: " + quote.value);
}

