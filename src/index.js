import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// root
app.route("/").get((req, res) => {
  res.status(200).json({
    success: true,
    message: "eltneg's dev ops test project"
  });
});

//ping route
app.route("/ping").get((req, res) => {
  res.status(200).json({
    success: true,
    message: "pong"
  });
});

// other routes
app.route("*").all((req, res) =>
  res.status(404).json({
    success: false,
    message: "route not found"
  })
);

const server = app.listen(port, () => console.debug(`"app running on port ${port}"`));

// console.log(`Serving app on: http://localhost:${port}`);

export default server;
