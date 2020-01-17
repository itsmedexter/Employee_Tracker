// What do we want to do?
// Add to departments, roles, employees
// View departments, roles, employees
// Update employee roles 

// How are you going to do it?
// use keys from prompts to envoke functions?


var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port:3000,
    user: "root",
    password: "password",
    database: "employee_db"
});

function start() {
    inquirer
        .prompt({
            name: "choose",
            type: "list",
            message: "What would you like to do?",
            choices: [{
                 key:"addDepartments", 
                value: "Add departments",
            },
            {   Key: "addRoles",
                value: "Add roles"
            },
            {   
                key: "addEmployees",
                value: "Add employees",
            },
            {   Key: "viewDepartments",
                value: "View departments",
            },
            {   key: "viewRoles",
                value: "View roles",
            },
            {
                key: "viewEmployees",
                value: "View employees",
            },
            {   key: "updateEmployeeRoles",
                value: "Update employee roles"
            }
            ]
        })
    .then(answers => {
        console.info("Answer: ", answers.list);
    })    
}


// Adding Departments function
function addingDepartments() {
    console.log("Inserting department.\n");
    var query = connection.query(
        "INSERT INTO department SET?",
    {
        name: input,
    },
    function(err, res) {
        console.log(res.affectedRows + " department inserted!\n");
// callback function?
    }
);
console.log(query.sql);
}


// Adding Roles function
function addingDepartments() {
    console.log("Inserting roles.\n");
    var query = connection.query(
        "INSERT INTO roles SET?",
    {
        title: input,
    },
    function(err, res) {
        console.log(res.affectedRows + " role inserted!\n");
        // callback function?
    }
);
console.log(query.sql);
}

// Adding Employees function
function addingDepartments() {
    console.log("Inserting employee.\n");
    var query = connection.query(
        "INSERT INTO employee SET?",
    {
        first_name: input,
        last_name: input,
    },
    function(err, res) {
        console.log(res.affectedRows + " role inserted!\n");
        // callback function?
    }
);
console.log(query.sql);
}


// View Department function
function viewDepartments() {
    connection.query("SELECT name FROM employee_db.department", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function?
    });
}

// View Roles function
function viewRoles() {
    connection.query("SELECT title FROM employee_db.roles", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function?
    });
}

// View Employees function
function viewEmployees() {
    connection.query("SELECT first_name FROM employee_db.employee", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function? 

    });
}


// Update employee roles, employee: first_name last_name role_id, roles: title, inner join
function updateEmployeeRoles() {
    console.log("Updating employee roles...\n");
    var query = connection.query (
        "UPDATE roles WHERE title",
        [
            {
            title: input,
            }   
        ],
        function(err, res) {
            console.log(res.affectedRows + " employee roles updated!\n");
        //callback another function? 
        }
    );

start();











// "Add departments",
//                 "Add roles",
//                 "Add employees",
//                 "View departments",
//                 "View roles",
//                 "View employees",
//                 "Update employee roles"




 // {
            //     key:"addDepartments", 
            //     value: "Add departments",
            // },
            // {   Key: "addRoles",
            //     value: "Add roles",
            // },
            // {   
            //     key: "addEmployees",
            //     value: "Add employees",
            // },
            // {   Key: "viewDepartments",
            //     value: "View departments",
            // },
            // {   key: "viewRoles",
            //     value: "View roles",
            // },
            // {
            //     key: "viewEmployees",
            //     value: "View employees",
            // },
            // {   key: "updateEmployeeRoles",
            //     value: "Update employee roles"
            // }]