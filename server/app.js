import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// root route
app.get("/", async (req, res) => {
  res.send("Hello Abdulhakeem");
});

app.get("/api/", async (req, res) => {
  //
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
