import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public patient: any;

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient(Number(this.route.snapshot.params.id));
  }

  getPatient(id: number) {
    this.patientService.getPatient(id).subscribe({
     next: data => this.patient = data,
      error: err => console.error(err),
      complete: () => console.log("patient loaded")
    });
  }

}
