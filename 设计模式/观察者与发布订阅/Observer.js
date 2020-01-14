// Subject Observe

class Employee {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`你好 我是${this.name} 开始工作`);
  }
}

class Company {
  constructor() {
    this.queue = [];
  }
  noticy(food) {
    this.queue.forEach(item => {
      item.work(food, "food");
    });
  }

  remove(fn) {
    this.queue.filter(item => {
      return item !== fn;
    });
  }

  add(fn) {
    this.queue.push(fn);
  }
}

let company = new Company();
company.add(new Employee("老张"));
company.add(new Employee("老王"));

company.noticy();
