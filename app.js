
const api ='http://localhost:1029/products';
function product(title, description, img) {
    fetch(api, {
  method: 'POST',
  body: JSON.stringify({
    title,
    img,
    description,
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
const form = document.querySelector(".wrapper");
console.log(form);
    form.addEventListener("submit",function(e) {
        e.preventDefault();
        const title = this.elements['title'].value;
        const img = this.elements['img'].value;
        const discription = this.elements['discription'].value;
        // console.log(title,img,discription);
        product(title, img, discription)

    })