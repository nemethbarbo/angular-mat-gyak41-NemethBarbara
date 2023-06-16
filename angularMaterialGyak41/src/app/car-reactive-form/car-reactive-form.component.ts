import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-reactive-form',
  templateUrl: './car-reactive-form.component.html',
  styleUrls: ['./car-reactive-form.component.css']
})

export class CarReactiveFormComponent implements OnInit{
  
  carForm!: FormGroup;    // carForm nevű változó ami mindenképp FormGroup lesz, nem any típusú

  carCategories = [
    {value: '1', viewValue: 'személy'},
    {value: '2', viewValue: 'teher'},
  ]

  constructor(private fb: FormBuilder){ }   // dependency injection, FormBuilder injectálása
  
  ngOnInit(): void {
    this.carForm = this.fb.group({   // űrlapelemek megadása, two-way binding megadása materiallal
      carLicencePlateNr: ['', [Validators.required, Validators.pattern('[A-Z]{3}-[0-9]{3}')]],
      carManufacturer: ['', [Validators.minLength(3), Validators.maxLength(30),Validators.required] ],
      carModel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      carCategory: '', // legördülő menü kell
      carFuelConsumption: ['', [Validators.minLength(0), Validators.maxLength(40),Validators.required] ],
      carManufactureYear: ['', [Validators.min(1920), Validators.max(new Date().getFullYear())] ],
      carValue: ['', [Validators.min(0), Validators.max(80000000)] ],
      carMileage: ['', Validators.min(0)],
      carStatus: [true]
    });
    this.carForm.valueChanges.subscribe(console.log); 
  }

  onSubmit():void {
    if (this.carForm.valid){
     console.log(this.carForm.value);
     alert("A megadott adatok: \nRendszám: " + this.carForm.value.carLicencePlateNr+ " \nGyártó: "+this.carForm.value.carManufacturer+ 
     " \nModel: " + this.carForm.value.carModel+" \nKategória: " + this.carForm.value.carCathegory+ " \nFogyasztás: " + this.carForm.value.carFuelConsumption+
     "l \nGyártási év: " + this.carForm.value.carManufactureYear+" \nÉrtéke: " + this.carForm.value.carValue+ "Ft \nFutott km: " + this.carForm.value.carMileage+
      " % \nÁllapot: " + this.carForm.value.carStatus);
    } else {
     this.carForm.markAllAsTouched();
    }
 }  

}

interface Category {    
  value:string;
  viewValue:string;
}