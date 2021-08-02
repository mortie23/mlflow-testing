# mlflow-testing

Running through using MLFlow to test deploying model scoring using a REST API.  
Following this tutorial [Train a linear regression model](https://mlflow.org/docs/latest/tutorials-and-examples/tutorial.html)

```ps1
mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root .\artifacts
```

```ps1
mlflow models serve -m .\artifacts\0\09d947b9e3cc4bc98a5804c7c8c5ce18\artifacts\clitest -p 1234
```

Then to score do this:

```ps1
python score.py
node score.js
```
