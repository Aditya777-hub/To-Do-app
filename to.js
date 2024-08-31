
const inputtype = document.getElementById("input-type");
const List = document.getElementById("list");

function myfunction(){
    if(inputtype.value ===''){
alert("write something..!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputtype.value;
        List.appendChild(li)
        let span = document.createElement("span") // SPAN IS ADDED TO GENERATE CROSS MARK
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputtype.value ='';
    savedata()
}

    List.addEventListener('click',function(a){
        if(a.target.tagName === "LI"){
          a.target.classList.toggle("checked")
          savedata()
        }
        else if(a.target.tagName === "SPAN"){
          a.target.parentElement.remove()
          savedata()
        }
    },false)

    //to store data
    function savedata(){
        localStorage.setItem("data",List.innerHTML)
    }

    function showData(){
        List.innerHTML = localStorage.getItem("data")
    }
    showData();