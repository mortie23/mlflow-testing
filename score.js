var request = require("request");
var options = {
  method: "POST",
  url: "http://localhost:1234/invocations",
  headers: {
    "Content-Type": "application/json",
    format: "pandas-split",
  },
  body: JSON.stringify({
    columns: [
      "alcohol",
      "chlorides",
      "citric acid",
      "density",
      "fixed acidity",
      "free sulfur dioxide",
      "pH",
      "residual sugar",
      "sulphates",
      "total sulfur dioxide",
      "volatile acidity",
    ],
    data: [[12.8, 0.029, 0.48, 0.98, 6.2, 29, 3.33, 1.2, 0.39, 75, 0.8]],
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
