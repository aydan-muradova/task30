
 let ul= document.querySelector("ul");

function addStudent(name) {
       let li = document.createElement("li");
         ul.appendChild(li);
         li.innerHTML=name;
         console.log(name);

         let index = ul.children.length + 1;
       
         if (index%2!=0) {
         li.style.backgroundColor = "rgb(175, 215, 229)";
        li.style.width="380px"
         }else{
        li.style.backgroundColor= "white";
        }  
}
addStudent("Anar Musayev");
addStudent("Rauf Babayev");
addStudent("Gunay Osmanova");












// function greeting(user) {
//      let li = document.createElement("li");
//   li.textContent = "Aydan";
//    ul.appendChild(li);
//    li.innerHTML = "Anar Musayev";
      
// }
// greeting();
// greeting();
// greeting();
