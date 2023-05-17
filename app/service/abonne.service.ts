import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {

  constructor(private http:HttpClient) { }

  postAbonne(data: any) {
    return this.http.post<any>('http://localhost:8000/api/Abonne', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAbonne() {
    return this.http.get<any>('http://localhost:8000/api/Abonne').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateAbonne(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/Abonne/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAbonne(id:number){
    return this.http.delete<any>("http://localhost:8000/api/Abonne/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}
