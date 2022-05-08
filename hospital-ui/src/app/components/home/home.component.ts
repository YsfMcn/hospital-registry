import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patientform: FormGroup = new FormGroup({});
  validMessage: String = "";

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientform = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      nationalSecurityNumber: new FormControl('', Validators.required),
      age: new FormControl()
    });
  }

  submitRegistration() {
    if (this.patientform.valid) {
      this.validMessage = "Your registration has been submitted!";
      this.patientService.createPatient(this.patientform.value).subscribe({
        next: data => this.patientform.reset,
        error: error => console.log(error)
      });
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
  
}
