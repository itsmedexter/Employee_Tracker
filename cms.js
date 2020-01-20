// What do we want to do?
// Add to departments, roles, employees
// View departments, roles, employees
// Update employee roles 

// How are you going to do it?
// use keys from prompts to envoke functions?
// Switch statments to envoke a certain function it belongs to
// user input for selection
// loop back to start





var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
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
                 key:"addDepartment", 
                value: "Add a department",
            },
            {   Key: "addRole",
                value: "Add a role"
            },
            {   
                key: "addEmployees",
                value: "Add a employee",
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
        console.info("Answer: ", answers.choose);
    switch (answers.choose) {
        case "Add a department":
            addingDepartment();
        break;
        case "Add a role":
            addingRole();
        break;
        case "Add a employee":
        addingEmployee();
        break;
        case "View departments":
        viewDepartments();
        break;
        case "View roles":
        viewRoles();
        break;
        case "View employees":
        viewEmployees();
        break;
        case "Update employee roles":
        updateEmployeeRoles();
    }    
    })    

}


// Adding Departments function
function addingDepartment() {
    console.log("Inserting department.\n");
    inquirer.prompt({
        name: "departmentName",
        type: "input",
        message: "Add a department"
    }).then(answers => {
        console.log("Answer: ", answers.departmentName)
        // this runs after prompt
        var query = connection.query(
            "INSERT INTO department SET?",
        {
            name: answers.departmentName,
        },
        function(err, res) {
            console.log(res.affectedRows + " department inserted!\n");
    // callback function?
    start()
        }
    );
    }).catch(error => {
        console.log(error);
    })    
        

    
// console.log(query.sql);
}


// Adding Roles function
function addingRole() {
    console.log("Inserting roles.\n");
    inquirer.prompt({
        name: "roleName",
        type: "input",
        message: "Add a role"
    }).then(answers => {
        console.log("Answer: ", answers.roleName)
        // this runs after prompt
    var query = connection.query(
        "INSERT INTO roles SET?",
    {
        title: answers.roleName,
    },
    function(err, res) {
        console.log(res.affectedRows + " role inserted!\n");
        // callback function?
        start();
    }
);
}).catch(error => {
    console.log(error);
})    
// console.log(query.sql);
}

// Adding Employees function
function addingEmployee() {
    console.log("Inserting employee.\n");
    inquirer.prompt([{
        name: "employeeFirstName",
        type: "input",
        message: "Add an employee's first name"
    },
    {
        name: "employeeLastName",
        type: "input",
        message: "Add an employee's last name"
    }]
    ).then(answers => {
        console.log("Answer: ", answers.employeeFirstName);
        console.log("Answer: ", answers.employeeLastName);

    var query = connection.query(
        "INSERT INTO employee SET?",
    {
        first_name: answers.employeeFirstName,
        last_name: answers.employeeLastName,
    },
    function(err, res) {
        console.log(res.affectedRows + " employee inserted!\n");
        // callback function?
        start();
    }
);
}).catch(error => {
    console.log(error);
})    }


// View Department function
function viewDepartments() {
    connection.query("SELECT name FROM employee_db.department", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function?
        start();
    });
}

// View Roles function
function viewRoles() {
    connection.query("SELECT title FROM employee_db.roles", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function?
        start();
    });
}

// View Employees function
function viewEmployees() {
    connection.query("SELECT first_name, last_name FROM employee_db.employee", function(err, res) {
        if (err) throw err;
        console.log(res);
        //callback another function? 
            start();
    });
}


// Update employee roles, employee: first_name last_name role_id, roles: title, join
function updateEmployeeRoles() {
    connection.query ("SELECT first_name, last_name, title FROM employee JOIN roles ON employee.id = roles.id",
        function(err, res) {
            if (err) throw err;
            console.log(res);
        //callback another function? 
        start();
        });
    }
start();








// "Add departments",
//                 "Add roles",
//                 "Add employees",
//                 "View departments",
//                 "View roles",
//                 "View employees",
//                 "Update employee roles"




//  {
//                 key:"addDepartments", 
//                 value: "Add departments",
//             },
//             {   Key: "addRoles",
//                 value: "Add roles",
//             },
//             {   
//                 key: "addEmployees",
//                 value: "Add employees",
//             },
//             {   Key: "viewDepartments",
//                 value: "View departments",
//             },
//             {   key: "viewRoles",
//                 value: "View roles",
//             },
//             {
//                 key: "viewEmployees",
//                 value: "View employees",
//             },
//             {   key: "updateEmployeeRoles",
//                 value: "Update employee roles"
//             }]