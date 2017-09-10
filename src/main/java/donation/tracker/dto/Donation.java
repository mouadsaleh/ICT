package donation.tracker.dto;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "donation_date")
    private Date donationDate;
    @Column(name = "donation_method", length = 10)
    private String donationMethod;
    @Column(name = "person_id", nullable = false)
    private String personId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDonationMethod() {
        return donationMethod;
    }

    public void setDonationMethod(String donationMethod) {
        this.donationMethod = donationMethod;
    }

    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getDonationDate() {
        return donationDate;
    }

    public void setDonationDate(Date donationDate) {
        this.donationDate = donationDate;
    }
}
