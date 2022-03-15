import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllemployeesService {
  getdetails(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }
  getallemployees():Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
  getfilterdallemployees(search:any):Observable<any>
    {
     return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?filter="+search)
    }
  getsortedallemployees(columnname:any, order:any):Observable<any>
    {
     return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?sortby="+columnname+"&order="+order);
    }
    getpageedallemployees(page:any, limit:any):Observable<any>
    {
     return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"?page="+page+"&limit="+limit);
    }
    deleteallemployees(id:any):Observable<any>
    {
      return this.httpClient.delete("https://6222413b666291106a21d80b.mockapi.io/employees/"+id)
    }
   


 
    
  }
 


