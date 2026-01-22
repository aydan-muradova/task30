
 let ul= document.querySelector("ul");

function addStudent(name) {
       let li = document.createElement("li");
         ul.append(li);
         li.innerHTML=name;
         console.log(name);

    

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
