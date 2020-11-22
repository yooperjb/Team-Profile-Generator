//const EmployeeInfo = require('../index');

const generateHtmlPage2 = (employees) => {
    console.log(`Got the data`, employees);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel='stylesheet' href='./styles.css'>
    <title>Project Team</title>
</head>

<body>
    <header><h1>My Team</h1></header>
    <div class="container">
        <div class="row">
           
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Jared</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: 1</li>
                    <li class="list-group-item">Email: email</li>
                    <li class="list-group-item">Office number: 6</li>
                </ul>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Jared</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: 1</li>
                    <li class="list-group-item">Email: email</li>
                    <li class="list-group-item">Office number: 6</li>
                </ul>
            </div>
        </div>
   
    </div>  <!-- end col -->
    </div>  <!-- end container -->
      <!-- jQuery and JS bundle w/ Popper.js -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>

</html>
    `
};

const generateHtmlPage = (employees) => {
    console.log(`Got the data`, employees);
    employees.forEach(element => {
        console.log(element);
    });
};

module.exports = generateHtmlPage;