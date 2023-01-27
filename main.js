const body = document.getElementsByTagName("<body>");
const y = document.getElementById("sign-up");
const x = document.getElementById("log-in")
const change = document.querySelector(".lightdark");


    function logIn(){
        x.style="display:block"
        }
    function singUp(){
        y.style="display:block";
        }
    function close1(){
        x.style="display:none;cursor:pointer"
        }
    function close2(){
        y.style="display:none;cursor:pointer"
        }

let list = document.querySelector("#list");
let btn = document.querySelectorAll(".btn");
        for(let i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', () => {
                if(btn[i].value === "discard"){
                    btn[i].style = "background-color: rgb(91, 201, 91);color:white";
                    btn[i].value = "select";
                    list.innerText++;
                    list.style="display:block";
                }
                else if(btn[i].value === "select"){
                    btn[i].style = "background-color: white;color:black";
                    btn[i].value = "discard"
                    list.innerText--;
                        if(list.innerText < 1){
                            list.style="display:none"
                        }  
        }
    })
    }

const  plus = document.querySelectorAll("#btnplus");
const  minus = document.querySelectorAll("#btnminus");

    for(let i = 0; i < plus.length; i++){
        plus[i].addEventListener('click', () => {
            list.innerText++;
            list.style="display:block";
        })
    }

    for(let i = 0; i < minus.length; i++){
        
        minus[i].addEventListener('click', () => {
            list.innerText--;
            if(list.innerText < 1){
            list.innerText = 1
        }
        })
    }
