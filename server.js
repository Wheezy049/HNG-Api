const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Define the API endpoint
app.get("/", (req, res) => {
  res.json({
    email: "olatoyesefaruq@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Wheezy049"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
