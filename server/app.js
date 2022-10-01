import express from "express";
import cors from "cors";

import { Users } from "./users.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// root route
app.get("/", async (req, res) => {
  res.send("Hello Abdulhakeem");
});

// Gets ALL database users
// app.get("/api", async (req, res) => {
//   try {
//     let users = [];

//     Users.forEach((user) => users.push(user));

//     // console.log(users);

//     if (users.length < 1)
//       return res.json({
//         status: false,
//         message: "No record yet!",
//       });

//     res.send(users);
//   } catch (error) {
//     error &&
//       res.json({
//         status: false,
//         message: "Error Ocurred",
//       });
//   }
// });

// Get selected database users based on search keyword
app.get("/api/:id", async (req, res) => {
  try {
    // console.log(req.params);
    let users = [];
    let _detail = req.params.id.toLocaleLowerCase();
    let detail = _detail || false;

    if (detail) {
      Users.filter((user) => {
        if (
          user.first_name.toLocaleLowerCase() === detail ||
          user.last_name.toLocaleLowerCase() === detail ||
          user.email.toLocaleLowerCase() === detail ||
          user.gender.toLocaleLowerCase() === detail
        ) {
          //   console.log(user);
          users.push(user);
        }
      });
    }
    // console.log(users);

    if (users.length < 1)
      return res.json({
        status: false,
        message: "No record yet!",
      });

    res.send(users);
  } catch (error) {
    error &&
      res.json({
        status: false,
        message: "Error Ocurred",
      });
    // res.send(error.message);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
