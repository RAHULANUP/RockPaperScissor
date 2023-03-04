const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissors")


const result=document.getElementById("result")

let choice=["rock","paper","scissors"]

//computer choice

const comp=(choice)=>{
    let index=Math.floor(Math.random() *choice.length)
    return choice[index]
}
//user
rock.onclick = () =>{
    if(comp(choice)=="rock"){
        //console.log("draw")
        result.innerText = "DRAW"

    }
    else if(comp(choice)=="paper"){
        //console.log("you lost")
        result.innerText = "YOU LOST"
    }
    else{
        //console.log("you win")
        result.innerText = "YOU WINNNN"
    }
}

paper.onclick = () =>{
    if(comp(choice)=="rock"){
        //console.log("you win")
        result.innerText = "YOU WINNNN"
    }
    else if(comp(choice)=="paper"){
        //console.log("draw")
        result.innerText = "DRAW"
    }
    else{
        //console.log("you lost")\
        result.innerText = "YOU LOST"
    }
}

scissor.onclick = () =>{
    if(comp(choice)=="rock"){
        //console.log("you lost")
        result.innerText = "YOU LOST"
    }
    else if(comp(choice)=="paper"){
        //console.log("you win")
        result.innerText = "YOU WINNNN"
    }
    else{
        //console.log("draw")
        result.innerText = "DRAW"
    }
}