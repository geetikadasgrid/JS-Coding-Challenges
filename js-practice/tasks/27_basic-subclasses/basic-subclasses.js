// ### Basic subclasses

// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve).
// The first object in the array should be an instance of the class Man.
// The second should be an instance of the class Woman.
// Both objects have to be subclasses of Human.
// Your task is to implement the Human, Man and Woman classes.
// Define the base class Human
class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Man extends Human {
  constructor() {
    super('Adam', 'male');
  }
}

class Woman extends Human {
  constructor() {
    super('Eve', 'female');
  }
}

class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

describe('basic subclasses', () => {
  let humans;

  beforeEach(() => {
    humans = God.create();
  });

  it('God should create two humans', () => {
    expect(humans[0] instanceof Human).toBe(true);
    expect(humans[1] instanceof Human).toBe(true);
  });

  it('first human should be a Man', () => {
    expect(humans[0].sex).toBe('male');
    expect(humans[0] instanceof Man).toBe(true);
  });

  it('second human should be a Woman', () => {
    expect(humans[1].sex).toBe('female');
    expect(humans[1] instanceof Woman).toBe(true);
  });

  it('the name of a man should be Adam', () => {
    expect(humans[0].name).toBe('Adam');
  });

  it('the name of a woman should be Eve', () => {
    expect(humans[1].name).toBe('Eve');
  });
});
