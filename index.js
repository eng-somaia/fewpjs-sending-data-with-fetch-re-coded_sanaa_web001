let submitData = (a,b) => {
  let formData = {
  name: a,
  email: b
};
  return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(obj =>{
    let p = document.createElement("p");
    p.innerHTML = obj.id;
    document.body.appendChild(p);
  })
  .catch(error => {
    let p = document.createElement("p");
    p.innerHTML = errow.message;
    document.body.appendChild(p);
  })
}
