import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from '../../services/patient.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public patients: any;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().subscribe(
      data => this.patients = data,
      err => console.error(err),
      () => console.log('Patients loaded')
    );
  }

}
