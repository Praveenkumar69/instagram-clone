package com.springreact.service;

import com.springreact.model.PasswordLog;
import com.springreact.model.Person;
import com.springreact.model.RegistrationForm;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class PersonService {
    public Person createPerson(RegistrationForm registrartionForm){
        Person person =new Person();
        person.setEmail(registrartionForm.getEmail());
        person.setName(registrartionForm.getName());
        person.setCreated_on(Instant.now());
        return person;
    }

    public PasswordLog createPasswordLog(Person person, RegistrationForm registrationForm) {
        PasswordLog passwordLog = new PasswordLog();
        passwordLog.setPassword(registrationForm.getPassword());
        passwordLog.setEmail(registrationForm.getEmail());
        passwordLog.setPerson(person);
//        passwordLog.setCreated_on();
        return passwordLog;
    }


}
