const div1 =document.getElementById("div1");
const p1 =document.getElementById("p1");
const a1 =document.getElementById("a1");
const div2 =document.getElementById("div2");
const p2 =document.getElementById("p2");
const a2 =document.getElementById("a2");
const div3 =document.getElementById("div3");
const p3=document.getElementById("p3");
const a3 =document.getElementById("a3");
const ul =document.getElementById("ul");

p1.addEventListener("click" , () =>{
a1.classList.toggle("hidden")

});
p2.addEventListener("click" , () =>{
a2.classList.toggle("hidden")

});
p3.addEventListener("click" , () =>{
a3.classList.toggle("hidden")

});

fetch("https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state").then((res) =>{
    return res.json()
}).then((data)=>{
data.forEach((element)=>{
ul.innerHTML += `<div  class="transition-all  flex flex-col gap-5 h-full min-w-70 hover:scale-110 duration-200">
  <img class="h-[200px] w-[300px]" src="/img/${element.image}" alt="">
  <div class="flex gap-1">
    <p class="text-orange-500 text-[20px] font-bold">$</p>
    <span class="font-bold text-[20px] text-[#8c8b8b]">${element.price}</span>
  </div>
  <span class="font-bold text-[20px] text-[#1f3e72]">${element.name}</span>
  <p class="text-[13px] text-[#8c8b8b]">${element.adress
}</p>
</div>`

})

})

