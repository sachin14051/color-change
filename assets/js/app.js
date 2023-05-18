let cl = console.log;
const selectColor = document.getElementById("selectColor");
const allselect = [...document.querySelectorAll(".all")]
cl(allselect)




const changeColor = (eve) =>{
    value=eve.target.value
    cl(value)
    allselect.forEach(div=>{
        div.classList.add("d-none");

    })
   let  valueselect = [...document.querySelectorAll("."+ value)]
//cl(valueselect)
valueselect.forEach(a =>{
        a.classList.remove("d-none")
    })


}








selectColor.addEventListener("change", changeColor)