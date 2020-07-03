const topicQueries = require("../db/queries.topic");

module.exports = {

index(req, res, next){
  topicQueries.getAllTopics((err, topics) => {
    if(err){
      res.redirect(500, "static/index")
    } else {
      res.render("topics/index", {topics});
    }
  })
},
new(req, res, next){
  res.render("topics/new");
},

create(req, res, next){
  console.log(req.body)
  let newTopic = {
    title: req.body.title,
    description: req.body.description
  };
  topicQueries.addTopic(newTopic, (err, topic) => {
    if(err){
      res.redirect(500, "topics/new");
    } else {
      res.redirect(303, `/topics/${topic.id}`);
    }
  });
},
show(req, res, next){
  topicQueries.findTopic(req.params.id, (err, topic) => {
    if(err || topic == null) {
      res.redirect(404, "/");
    } else {
      res.render("topics/show", {topic})
    }
  })
},
edit(req, res, next){
  topicQueries.findTopic(req.params.id, (err, topic) => {
    if(err || topic == null){
      res.redirect(404, "/");
    } else {
      res.render("topics/edit", {topic});
    }
  })
},
update(req, res, next){
  topicQueries.updateTopic(req, req.body, (err, topic) => {
    if(err || topic == null){
      res.redirect(404, `/topics/${topic.id}/edit`);
    } else {
      res.redirect(303, `/topics/${topic.id}`);
    }
  })
},
delete(req, res, next){
  topicQueries.destroy(req.params.id, (err, topic) => {
    if(err){
      res.redirect(404, `/topics/edit/${topic.id}`)
    } else {
      res.redirect(303, "/topics");
    }
  })
}


}