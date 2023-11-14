// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}



// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);


const promis = fetch("https://jsonplaceholder.typicode.com/posts");

const dataPromis = promis.then ((response) => {
  return response.json();
  
});
//console.log(dataPromis)

const parent = document.getElementById("parent")

dataPromis.then((data) => {
  console.log(data);

  data.forEach(item => {
    const newDiv = document.createElement("div");
    newDiv.className = "section"
    newDiv.textContent = item.title;

    console.log(item.title);

    newDiv.addEventListener("click", toggle);

    parent.appendChild(newDiv);

   const newDiv2 = document.createElement("div");
   newDiv2.className = "description";
   newDiv2.textContent = item.body
   
   console.log(item.body)
   
   newDiv2.addEventListener("click", toggle);
   
   parent.appendChild(newDiv2);
    

  });

})


