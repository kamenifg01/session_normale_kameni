import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivationService {

  constructor(private http:HttpClient) { }

  postMotivation(data: any) {
    return this.http.post<any>('http://localhost:8000/api/Motivation', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getMotivation() {
    return this.http.get<any>('http://localhost:8000/api/Motivation').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateMotivation(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/Motivation/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMotivation(id:number){
    return this.http.delete<any>("http://localhost:8000/api/Motivation/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
