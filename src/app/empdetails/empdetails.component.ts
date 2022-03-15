import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllemployeesService } from '../allemployees.service';
import { EmpdetailsService } from '../empdetails.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  details={};

  constructor(private activatedRoute:ActivatedRoute,private empdetailsService:EmpdetailsService) 

  
  { 
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.getdetails(data.id);

      }

    )
    
  }


  ngOnInit(): void {
  }
  getdetails(id:any)
  {
    this.empdetailsService.getdetails(id).subscribe(
      (data:any)=>{
        this.details=data;
      }

    )
  }

}
