package com.cityhospital.hospital.repositories;

import com.cityhospital.hospital.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
