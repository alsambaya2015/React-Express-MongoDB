// EmployeeRoutes.js

const express = require('express');
const app = express();
const EmployeeRouter = express.Router();

const Employee = require('../models/Employee');

EmployeeRouter.route('/add').post(function (req, res) {
  const employee = new Employee(req.body);
  employee.save()
    .then(employee => {
        res.json('Employee added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

EmployeeRouter.route('/').get(function (req, res) {
  Employee.find(function (err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

EmployeeRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Employee.findById(id, function (err, employee){
      res.json(employee);
  });
});

EmployeeRouter.route('/update/:id').post(function (req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    if (!employee)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      employee.name = req.body.name;
      employee.code = req.body.code;
      employee.profession = req.body.profession;
      employee.color = req.body.color;
      employee.city = req.body.city;
      employee.branch = req.body.branch;
      employee.assigned = req.body.assigned;

      employee.save().then(employee => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

EmployeeRouter.route('/delete/:id').get(function (req, res) {
  Employee.findByIdAndRemove({_id: req.params.id},
       function(err, employee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = EmployeeRouter;