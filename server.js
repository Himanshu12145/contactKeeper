const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect to DB
connectDB();

// Initializing the middleware
app.use(express.json({ extended: false }));

// routes here
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// ? Serve React in Production
if (process.env.NODE_ENV == "production") {
  // Set a static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.js"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
