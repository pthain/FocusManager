/*Class definitions*/
exports.project = function Project(name) {
  this.goals = []   //Each project has a list of goals
  this.name = name  //Each project has a name
}

exports.goal = function Goal(id, parent, title, info) {
  this.id = id
  this.gparent = parent  //Project or Goal associated with this Goal
  //this.tasks = []         //Each goal has a list of tasks
  this.gtitle = title
  this.ginfo = info  //Goal's description
  this.gcompleted = false
}

function Task(goal, description) {
  // TODO: Implement Tasks
}

/*Class Factories*/
function createProject(name) {
  return new Project(name)
}

function createGoal(id, parent, title, description) {
  return new goal(id, parent, title, description)
}
