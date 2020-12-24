package com.springreact.repository;

//import .User;
import com.springreact.model.PasswordLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<PasswordLog,Long> {
    @Query(value="select * from password_log pl where person_id =?1 order by id desc limit 1",nativeQuery=true)
    PasswordLog findPasswordLogByPerson(Long id);
}
