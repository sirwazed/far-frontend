import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { data } from 'autoprefixer';
//import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<any[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<any> = [];
        for (const id in data) {
if (data.hasOwnProperty(id))
          {propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      }
        )
    )
  }
}
