import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  allemployees:any=[];
  search="";
  column="";
  order="";
  page="";
  limit="";
  Details=[];


  constructor(private allemployeesService:AllemployeesService, private router:Router) {

    this.allemployeesService.getallemployees().subscribe(
      (data:any)=>{
        this.allemployees=data;
      },
      (error:any)=>{
        alert("server down");
      }
    )
   }
   view(id:any)
   {
     this.router.navigateByUrl("/dashboard/empdetails/"+id);
   }
   filter()
   {
     this.allemployeesService.getfilterdallemployees(this.search).subscribe(
      (data:any)=>{
        this.allemployees=data;
      },
      (error:any)=>{
        alert("server down");
      }
     )
   }
   sort()
   {
     this.allemployeesService.getsortedallemployees(this.column, this.order).subscribe(
       (data:any)=>{
         this.allemployees=data;
       },
       (error:any)=>{
         alert("server down");
       }
     )
   }
   next()
   {
     this.allemployeesService.getpageedallemployees(this.page, this.limit).subscribe(
       (data:any)=>{
         this.allemployees=data;
       },
       (error:any)=>{
         alert("server down");
       }
     )
   }
   delete(id:any)
   {
     this.allemployeesService.deleteallemployees(id).subscribe(
       (data:any)=>{
         alert("dalete successfully");
       },
       (error:any)=>{
         alert("server down")
       }
     )
  }
 

  ngOnInit(): void {

  }
  

}
