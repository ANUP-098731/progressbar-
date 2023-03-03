

var a,b,c,d;


// function btn1(){
   
//    b= setInterval(fun2,300)
    

// }

// function fun2(){
//     a=Math.floor(Math.random()*10)
//     console.log(a)
//     document.write("still running <br>")
//     if(a===3){
//         document.write("intervalcleared")
//         clearInterval(b)
//     }
//     // else(
//     //     document.write("still running <br>")
//     // )
        
// }
a=document.getElementById("mybar")
function btn1(){
    
   c=setInterval(fun2,19)
}
b=0
function fun2(){
    // sum=80
    // b=Math.floor(Math.random()*100)+1
    
        
    if(b==80){
        // a.style.width=b+"%"
        clearInterval(c)
    }
    else{
        b++
        a.style.width=b+"%"
        // a.style.transition="all 2s"
        document.getElementById("p1").innerHTML=b+"%"
    }

}

//Query selector query selector all

// function btn1(){
//     // a=document.querySelector(".demo")
//     // a=document.querySelectorAll(".demo")
//     // console.log(a[0])


//     //for id
// //    b= document.querySelector("#demo1")
// //    console.log(b)

// //tag name
// // c=document.querySelector("h1")
// c=document.querySelectorAll("h1")
// console.log(c[0].innerHTML)


// }
