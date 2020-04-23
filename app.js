import router from "./router.js";

//Other
import home from "./routes/home.js";
import logOut from "./routes/log-out.js";
import missing from "./routes/missing.js";
//User routes
import logIn from "./routes/log-in.js";
import signUp from "./routes/sign-up.js";
import users from "./routes/users.js";

// Dog routes
import allDogs from "./routes/all-dogs.js";
import oneDog from "./routes/one-dog.js";
// import newDog from "./routes/new-dog.js";
// import UpdateDog from "./routes/update-dog.js";
// import deleteDog from "./routes/delete-dog.js";

const app = router();
//Other
app.get("/", home);
app.get("/log-out", logOut);
app.get("/missing", missing);

//Users
app.get("/log-in", logIn);
app.get("/sign-up", signUp);
app.get("/users/:id", users);

//Dogs
app.get("/dogs", allDogs);
app.get("/dogs/:id", oneDog);
// app.post("/dogs/:id", newDog);
// app.put("/dogs/:id", UpdateDog);
// app.delete("/dogs/:id", deleteDog);

app.listen();
