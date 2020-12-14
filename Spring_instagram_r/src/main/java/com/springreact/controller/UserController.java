package com.springreact.controller;

import com.springreact.model.PasswordLog;
import com.springreact.model.Person;
import com.springreact.model.RegistrationForm;
import com.springreact.model.LoginForm;
import com.springreact.repository.PersonRepository;
import com.springreact.repository.UserRepository;
import com.springreact.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonService personSrevice;

    @PostMapping("/admin")
    public String addUser(@RequestBody RegistrationForm registrationForm){

        String pwd = registrationForm.getPassword();
        //check validation in Registration form
        Person person = personSrevice.createPerson(registrationForm);
        personRepository.save(person);
        return "user added";
    }

    @PostMapping("/register")
    public String registerUser(@Valid @RequestBody RegistrationForm registrationForm){

        //check validation in Registration form
        Person person = personSrevice.createPerson(registrationForm);
        personRepository.save(person);
        PasswordLog passwordLog = personSrevice.createPasswordLog(person, registrationForm);
        userRepository.save(passwordLog);
        return "user";
    }


    @PostMapping("/login")
    public String login(@Valid @RequestBody LoginForm loginForm){


        //check validation in Registration form
        Person person = personRepository.findPersonByEmail(loginForm.getEmail());
        PasswordLog passwordLog = userRepository.findPasswordLogByPerson(person.getId());
        System.out.println(passwordLog);
        userRepository.save(passwordLog);
        return "user";
    }


}
