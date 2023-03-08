// console.log('hi!');

let letters = ['a', 'b', 'c']; //an array;

let emojiObject = {
    "key": "value",
    "id": 13,
    "emoji": "👍"
};

//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('./assets/emojis-v3.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processEmojis(data);
  })
  .catch(error => console.log(error));

function processEmojis( data ){

  let key = parseInt(container.dataset.key);


  data.forEach( function(item, index){
    
    if ( item.id == key ){
      let newItem = document.createElement("div");
      newItem.classList.add("icon");
      newItem.classList.add(item.categorykey);
      // newItem.style.cssText = `font-size: ${usage}px`;
      newItem.innerHTML = `
        <div class="category">${item.category}</div>
        <div class="emoji">${item.emoji}</div>
        <div class="detail">
            ${item.emoji}<br>
            <p class="description">${item.description}</div>
        </div>
        `;
      container.appendChild(newItem);  
    }
   
  });
}



