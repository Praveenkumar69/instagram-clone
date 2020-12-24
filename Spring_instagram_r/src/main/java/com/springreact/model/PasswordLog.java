package com.springreact.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "password_log")
public class PasswordLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    @ManyToOne
    @JoinColumn(name="person_id",referencedColumnName = "id" )

    private Person person;


    private String password;
    @CreationTimestamp
    private LocalDateTime created_on;
    @UpdateTimestamp
    private LocalDateTime retried_on;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public LocalDateTime getCreated_on() {
        return created_on;
    }

    public void setCreated_on(LocalDateTime created_on) {
        this.created_on = created_on;
    }

    public LocalDateTime getRetried_on() {
        return retried_on;
    }

    @Override
    public String toString() {
        return "PasswordLog{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", person=" + person +
                ", password='" + password + '\'' +
                ", created_on=" + created_on +
                ", retried_on=" + retried_on +
                '}';
    }

    public void setRetried_on(LocalDateTime retried_on) {
        this.retried_on = retried_on;
    }
}
