package com.cityhospital.hospital.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String surname;
    private String phone;
    private String nationalSecurityNumber;
    private int age;

    @CreatedDate
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Column(updatable = false)
    private Date createdDate;

    @LastModifiedDate
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @EqualsAndHashCode.Exclude
    private Date lastModifiedDate;

}
