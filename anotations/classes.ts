class Vehicle {
  constructor(public color: string) {}
  public drive(): void {
    console.log('vrooommm....');
  }

  protected honk(speed): void {
    console.log('beep ', speed);
  }
}

class Car extends Vehicle {
  constructor(public speed: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('audi audi....', this.color);
  }
  car_honk(): void {
    this.honk(this.speed);
  }
}

const audi = new Car(120, 'Orange');

audi.drive();
audi.car_honk();
