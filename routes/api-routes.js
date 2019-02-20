const db = require('../models');

module.exports = function (app) {

  app.get('/api/todoItems', function (req, res) {
    db.todoItems.find({})
      .then(function (Todo) {
        res.json(Todo);
      })
      .catch(function (errors) {
        res.json(errors);
      });
  });



  app.post('/api/todoItems', function (req, res) {
    db.todoItems.create(req.body)
      .then(function (dbTodo) {
        res.json(dbTodo);
      });
    });

    app.put('/api/todoItems/:id', function (req, res) {
      db.todoItems.findOneAndUpdate({_id: req.params.id}, 
        {
          $set: {
            done: req.body.done
          }
        })
        .then(function (dbTodo) {
          console.log(dbTodo);
          res.json({
            success: true
          });
        })
        .catch(function (err) {
          console.log(err);
          res.json(err);
        })
  })
    app.delete('/api/todoItems/:id', function (req, res) {
      db.todoItems.findOneAndDelete({_id: req.params.id})
        .then(function () {
          res.json({ success: true })
        }).catch(function(err){
          res.json(err)
        })

    })
  }

