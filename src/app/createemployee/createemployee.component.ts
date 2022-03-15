import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreateemployeeService } from '../createemployee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  createemployeeForm:FormGroup=new FormGroup({
    name:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()


    }),
    education:new FormArray([]),
    role:new FormControl(),

  })
  submit()
  {
    console.log(this.createemployeeForm);
  }
  get educationFormArray()
  {
    return this.createemployeeForm.get('education') as FormArray;
  }
  addcart()
  {
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()

      })

    ) 
  }


  constructor(private createemployeeServie:CreateemployeeService) {
    this.createemployeeForm.get('role')?.valueChanges.subscribe(
      data=>{
        if (data=='Frontend Engineer')
        {
          this.createemployeeForm.addControl('HTML',new FormControl());
          this.createemployeeForm.addControl('CSS',new FormControl());
          this.createemployeeForm.addControl('Javascript',new FormControl());
          this.createemployeeForm.addControl('Angular',new FormControl());
        }
        else
        {
          this.createemployeeForm.addControl('NodeJs',new FormControl());
          this.createemployeeForm.addControl('ExpressJs',new FormControl());
          this.createemployeeForm.addControl('MongoDb',new FormControl());
        

        }
        console.log(this.createemployeeForm);
      }

    )
   }

  ngOnInit(): void {
  }

}
