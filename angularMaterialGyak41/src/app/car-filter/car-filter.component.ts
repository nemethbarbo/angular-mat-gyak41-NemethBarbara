import { Component } from '@angular/core';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent {
  cars: Car[] = [
    { carLicencePlateNr: 'PCA-180', carManufacturer: "Honda", carModel: 'Civic', carCategory: 'személy', carFuelConsumption: 6, carManufactureYear: 2011,  carValue: 2000000, carMileage: 180000 },
    { carLicencePlateNr: 'ABC-123', carManufacturer: "Opel", carModel: 'Astra G', carCategory: 'személy', carFuelConsumption: 8, carManufactureYear: 2006, carValue: 1000000, carMileage: 200000 },
    { carLicencePlateNr: 'DEF-456', carManufacturer: "BMW", carModel: 'i3', carCategory: 'személy', carFuelConsumption: 7, carManufactureYear: 2019,  carValue: 2100000, carMileage: 7000000 },
    { carLicencePlateNr: 'GHI-789', carManufacturer: "Volkswagen", carModel: 'Beetle', carCategory: 'személy', carFuelConsumption: 6, carManufactureYear: 2017,  carValue: 2700000, carMileage: 90000 },
    { carLicencePlateNr: 'JKL-012', carManufacturer: "Suzuki", carModel: 'Vitara', carCategory: 'személy', carFuelConsumption: 7, carManufactureYear: 2016,  carValue: 4800000, carMileage: 120000 },
    { carLicencePlateNr: 'MNO-345', carManufacturer: "Kia", carModel: 'Ceed', carCategory: 'személy', carFuelConsumption: 7, carManufactureYear: 2021,  carValue: 5500000, carMileage: 70000 },
    { carLicencePlateNr: 'PQR-678', carManufacturer: "Audi", carModel: 'A4', carCategory: 'személy', carFuelConsumption: 6, carManufactureYear: 2014, carValue: 3000000, carMileage: 140000 },
    { carLicencePlateNr: 'STU-901', carManufacturer: "Ford", carModel: 'Transit', carCategory: 'teher', carFuelConsumption: 8, carManufactureYear: 2016,  carValue: 2100000, carMileage: 170000 },
    { carLicencePlateNr: 'VWX-234', carManufacturer: "Lancia", carModel: 'Delta', carCategory: 'személy', carFuelConsumption: 7, carManufactureYear: 2011,  carValue: 2200000, carMileage: 160000 },
    { carLicencePlateNr: 'XYZ-567', carManufacturer: "Seat", carModel: 'Altea', carCategory: 'személy', carFuelConsumption: 6, carManufactureYear: 2011,  carValue: 1500000, carMileage: 170000 },
  ];

  filteredCars: Car[] = this.cars;
  displayedColumns: string[] = ['carLicencePlateNr', 'carManufacturer', 'carModel', 'carCategory', 'carFuelConsumption', 'carManufactureYear', 'carValue', 'carMileage'];
  carCategories: string [] =[...new Set(this.cars.map(car => car.carCategory))];

  searchCarLicencePlateNr: string | null = null;
  searchCarManufacturer: string = '';
  searchCarModel: string = '';
  searchCarCategory: string = '';
  searchCarFuelConsumption: number | null = null;
  searchCarManufactureYear: number | null = null;
  searchCarValue: number | null = null;
  searchCarMileage: number | null = null;

  applyFilter(): void {
    // console.log("szűrési folyamat...");
    this.filteredCars = this.cars.filter(car => {
      const carLicencePlateNrMatch = this.searchCarLicencePlateNr ? car.carLicencePlateNr === this.searchCarLicencePlateNr : true;
      const carManufacturerMatch = this.searchCarManufacturer ? car.carManufacturer.toLowerCase().includes(this.searchCarManufacturer.toLowerCase()) : true;
      const carModelMatch = this.searchCarModel ? car.carModel.toLowerCase().includes(this.searchCarModel.toLowerCase()) : true;
      const carCategoryMatch = this.searchCarCategory ? car.carCategory.toLowerCase().includes(this.searchCarCategory.toLowerCase()) : true;
      const carFuelConsumptionMatch = this.searchCarFuelConsumption ? car.carFuelConsumption === this.searchCarFuelConsumption : true;
      const carManufactureYearMatch = this.searchCarManufactureYear ? car.carManufactureYear === this.searchCarManufactureYear : true;
      const carValueMatch = this.searchCarValue ? car.carValue === this.searchCarValue : true;
      const carMileageMatch = this.searchCarMileage ? car.carMileage === this.searchCarMileage : true;
      return carLicencePlateNrMatch && carManufacturerMatch && carModelMatch && carCategoryMatch && carFuelConsumptionMatch && carManufactureYearMatch && carValueMatch && carMileageMatch;
    });
  }
}

export interface Car {
  carLicencePlateNr: string,
  carManufacturer: string,
  carModel: string,
  carCategory: string,
  carFuelConsumption: number,
  carManufactureYear: number,
  carValue: number,
  carMileage: number,
}
