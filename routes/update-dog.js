import query from "../query.js";
const app = document.querySelector("#app");


const html = `
<h1>Update details:</h1>
    <form id="updateForm">
    <label for="name">Dog's name: </label>
    <input type="text" id="name" name="name"/>
    <label for="breed">Dog Breed: </label>
    <input type="text" id="breed" name="breed" />
    <div id="message"><div>
    <button>Update Doggie </button>
</form>
`;



function updateDog({url, redirect}) {
  app.innerHTML= html;
  const dogId = url.searchParams.get("id");
  const token = localStorage.getItem("token");
  document.querySelector("#updateForm").addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    query(`https://dogs-rest.herokuapp.com/v1/dogs/${dogId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
        mode: 'no-cors'
      },
      body: JSON.stringify(formObject)
    })
    .then(dog => {
      console.log(dog)
      redirect("/dogs")
    })
    .catch(error => {
      console.error(error);
      app.querySelector("#message").append("Something Went Wrong With Updating Your Doggy!");
    });
  })
}

export default updateDog;
