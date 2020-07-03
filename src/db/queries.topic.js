const Topic = require("./models").Topic

module.exports = {

  getAllTopics(callback){
    return Topic.findAll()
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err)
    })
  },
  addTopic(newTopic, callback){
    return Topic.create({
      title: newTopic.title,
      description: newTopic.description
    })
    .then((topic) => {
      callback(null, topic); 
    })
    .catch((err) => {
      callback(err);
    })
  },
  findTopic(id, callback){
    return Topic.findByPk(id)
    .then((topic) => {
      callback(null, topic)
    })
    .catch((err) => {
       callback(err)
    })
  },
  updateTopic(req, updatedTopic, callback){
    return Topic.findByPk(req.params.id)
    .then((topic) => {
      if(!topic){
        return callback("Topic not found")
      }

      topic.update(updatedTopic, {
        fields: Object.keys(updatedTopic)
      })
      .then(() => {
        callback(null, topic);
      })
      .catch((err) => {
        callback(err);
      });
    })
  },
  destroy(id, callback){
    return Topic.findByPk(id)
    .then((topic) => {
      topic.destroy()
      .then((res) => {
        callback(null, topic);
      })
    })
    .catch((err) => {
      callback(err);
    })
  }


}