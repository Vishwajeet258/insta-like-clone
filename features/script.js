var con = document.querySelector("#profile")
var istatus = document.querySelector("h4")
var btn = document.querySelector("#add")
var like = document.querySelector("#change"); 
var lov = document.querySelector("#pop"); 
var check = 0
var love = 0

var main = document.querySelector("body");
var crsr = document.querySelector(".cursor");


// for lov pop
con.addEventListener("dblclick", function() {
    lov.style.transform ="translate(-50%,-50%) scale(1.5)";
    lov.style.opacity="0.8"
    setTimeout(function(){
    lov.style.transform ="translate(-50%,-50%) scale(0)";
    lov.style.opacity="0"
    },1000)
});

// add heart button 
like.addEventListener("click",function(){
    if(love === 0){
        like.style.color="red"
        like.style.transition = " ease 0.9s";
        love = 1
    }else{
        like.style.color="white" 
        like.style.transition = "0.0s";
        love = 0
   }
});

// friend unfriend button
btn.addEventListener("click",function(){
    if (check == 0) {
        istatus.innerHTML= "Friend"
        check = 1
        btn.innerHTML="Unfriend"
    } else {
        istatus.innerHTML= "Stranger"
        check = 0   
        btn.innerHTML="Friend"
    }
});

// cursor

main.addEventListener("mousemove", function(cursor) {
    crsr.style.left = cursor.pageX + "px";
    crsr.style.top = cursor.pageY + "px";
});


// stories scroll status bar
var arr=[
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1571513721963-d855fd8df4c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1548361403-cb0c785eea54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
var storiee = document.querySelector("#stories")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
              <img  id="${idx}" src="${elem.dp}" alt="" id="sto">
            </div>`
})
storiee.innerHTML=clutter
storiee.addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage =`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none"
    },3000)
});
