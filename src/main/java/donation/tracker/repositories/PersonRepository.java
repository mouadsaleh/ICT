package donation.tracker.repositories;

import donation.tracker.dto.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, String> {
    List<Person> findAll();

    Person findByPhoneNumberAndLastName(String phoneNumber, String lastName);

    List<Person> findTop10ByPhoneNumberContaining(String phoneNumber);
}
