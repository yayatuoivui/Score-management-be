const scores = await Score.findAll({
  include: [{
    model: Subject,
    as: 'subject',
    attributes: ['name']
  }]
}); 