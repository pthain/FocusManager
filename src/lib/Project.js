/*Class definitions*/
function Project(name) {
  this.goals = []   //Each project has a list of goals
  this.name = name  //Each project has a name
}

function Goal(parent, description) {
  this.parent = parent  //Project or Goal associated with this Goal
  //this.tasks = []         //Each goal has a list of tasks
  this.description = description  //Goal's description
  this.completed = false
}

function Task(goal, description) {
  // TODO: Implement Tasks
}

/*Class Factories*/
function createProject(name) {
  return new Project(name)
}

function createGoal(parent, description) {
  return new Goal(parent, description)
}
