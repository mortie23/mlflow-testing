import requests
import json

url = "http://localhost:1234/invocations"

payload = json.dumps({
  "columns": [
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
    "volatile acidity"
  ],
  "data": [
    [
      12.8,
      0.029,
      0.48,
      0.98,
      6.2,
      29,
      3.33,
      1.2,
      0.39,
      75,
      0.66
    ]
  ]
})
headers = {
  'Content-Type': 'application/json',
  'format': 'pandas-split'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
