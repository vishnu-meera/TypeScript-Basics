const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): void {
    console.log('name ', this.name);
    console.log('year ', this.year);
    console.log('broken ', this.broken);
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): void {
    console.log('color ', this.color);
    console.log('carbonated ', this.carbonated);
    console.log('sugar ', this.sugar);
  }
};
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log('name ', vehicle.name);
//   console.log('year ', vehicle.year);
//   console.log('broken ', vehicle.broken);
// };

//

// interface Vehicle_old {
//   name: string;
//   year: number;
//   broken: boolean;
//   sumary(): string;
// }

// printVehicle(oldCivic);

interface IReport {
  summary(): void;
}

const log = (item: IReport): void => {
  item.summary();
};

log(drink);
log(oldCivic);
