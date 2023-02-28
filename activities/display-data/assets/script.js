
// First show all the flowers and create divs for each of them
let container = document.getElementById("container");
// create a counter variable that will give us each flowers number in the array

fetch('./assets/emojis.json')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData( data ){
  data.forEach( function(item, index){
    // console.log(item, index);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.innerHTML = `
      <div class="phrase">${item.sample}</div>
      <div class="category">${item.category}</div>
      <div class="emoji">${item.emoji}</div>`;
    container.appendChild(newItem);    
  });
}
