package com.springreact.repository;

import com.springreact.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long> {
    Person findPersonByEmail(String email);

}
