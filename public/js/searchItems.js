function displayOptions(){
  searchCategories();
}

const searchCategories = async () => {
  const response = await fetch('/categories', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if(response.ok){
    let categories = await response.json();
    const select = document.getElementById('category');
    let optionText =`<option value="" disabled selected>I am looking for...</option>`;


    categories.forEach(category => {
      optionText = optionText+`
      <option value=${category.id}>${category.name}</option>
      `
    });
  
    select.innerHTML=optionText;

  } else{
    console.log("Error");
  }

}

function displayResults() {
    const select = document.getElementById('category');
    let option = select.options[select.selectedIndex];
    let categoryId = option.value;
    searchByCategory(categoryId);  
}

const searchByCategory = async (categoryId) => {
    const response = await fetch(`/items/${categoryId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      let data = await response.json();
      let replaceDiv = document.getElementById('displayDiv');
      let htmlText=``;
      replaceDiv.innerHTML="";

      if(data.length===0){
        htmlText = `<div class="col s12 center">
        <p>There are no items for this category<p>
        </div>`;
      } else {
        data.forEach(b=> {
          htmlText = htmlText+
           `<div class="col s12 m4">
               <div class="card">
               <div class="card-image">
               <img src="/images/${b.category_id}.jpg">
               <span class="card-title">${b.title}</span>
               <a class="btn-floating halfway-fab waves-effect waves-light red" href="/item/${b.id}"><i class="material-icons">zoom_in</i></a>
             </div>
               <div class="card-content">
               <p class="truncate">${b.description}</p>
             </div>
           </div>
         </div>`
       });
      }

    replaceDiv.innerHTML=htmlText;

    } else {
      console.log("Error");
    }
  };

