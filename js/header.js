fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
    
  });
  
fetch("./faq.html").then(response=>{
    return response.text()
}).then(data =>{
    document.querySelector("div#FAQ").innerHTML =data;
});