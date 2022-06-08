
const api ='http://localhost:1029/products';
function product(title, description) {
    fetch(api, {
  method: 'POST',
  body: JSON.stringify({
    title,
    description,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
const form = document.querySelector(".wrapper");
    form.addEventListener("submit",function(e) {
        console.log(e.target);
    })