package com.cityhospital.hospital.controllers;

import com.cityhospital.hospital.models.Patient;
import com.cityhospital.hospital.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/patients")
public class PatientsController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping
    public List<Patient> patientList() {
        return patientRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createPatient(@RequestBody Patient patient) {
        patientRepository.save(patient);
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable("id") long id) {
        return patientRepository.getById(id);
    }

}
