import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient ) { }

  getPatients(): Observable<any> {
    return this.http.get('/server/api/v1/patients');
  }

  getPatient(id: number) {
    return this.http.get('/server/api/v1/patients/' + id);
  }

  createPatient(patient: any) {
    const body = JSON.stringify(patient);
    return this.http.post('/server/api/v1/patients', body, httpOptions);
  }
  
}
