import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-reactive-form',
  templateUrl: './car-reactive-form.component.html',
  styleUrls: ['./car-reactive-form.component.css']
})

export class CarReactiveFormComponent implements OnInit{

  constructor(private fb: FormBuilder){ }   // dependency injection, FormBuilder injectálása

  form!:FormGroup;    // form nevű változó ami mindenképp FormGroup lesz, nem any típusú

  carCategory = [
    {value: '1', viewValue: 'személy'},
    {value: '2', viewValue: 'teher'},
  ]
  
  ngOnInit(): void {
    this.form = this.fb.group({   // űrlapelemek megadása, two-way binding megadása materiallal
      carLicencePlateNr: ['', [Validators.required, Validators.pattern('[A-Z{3}.-.[0-9]{3}]')]],
      carManufacturer: ['', [Validators.minLength(3), Validators.maxLength(30),Validators.required] ],
      carModel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      carCategory: '', // legördülő menü kell
      carFuelConsumption: ['', [Validators.minLength(0), Validators.maxLength(40),Validators.required] ],
      carManufactureYear: ['', [Validators.min(1920), Validators.max(new Date().getFullYear())] ],
      carValue: ['', [Validators.min(0), Validators.max(80000000)] ],
      carMileage: ['', Validators.min(0)],
      carStatus: [true]
    });
    this.form.valueChanges.subscribe(console.log); 
  }

  onSubmit():void {
    if (this.form.valid){
     console.log(this.form.value);
     alert("A megadott adatok: \nRendszám: " + this.form.value.carLicencePlateNr+ " \nGyártó: "+this.form.value.carManufacturer+ 
     " \nModel: " + this.form.value.carModel+" \nKategória: " + this.form.value.carCathegory+ " \nFogyasztás: " + this.form.value.carFuelConsumption+
     "l \nGyártási év: " + this.form.value.carManufactureYear+" \nÉrtéke: " + this.form.value.carValue+ "Ft \nFutott km: " + this.form.value.carMileage+
      " % \nÁllapot: " + this.form.value.carStatus);
    } else {
     this.form.markAllAsTouched();
    }
 }  

}

interface Category {    
  value:string;
  viewValue:string;
}