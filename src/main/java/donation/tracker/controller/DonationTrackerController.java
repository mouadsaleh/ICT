package donation.tracker.controller;

import donation.tracker.dto.Donation;
import donation.tracker.dto.Person;
import donation.tracker.repositories.PersonRepository;
import donation.tracker.repositories.DonationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
public class DonationTrackerController {

    @Resource
    private PersonRepository personRepository;
    @Resource
    private DonationRepository donationRepository;

    @RequestMapping("/")
    public String homeController(Model model) {
        Person person = new Person();
        person.setId(UUID.randomUUID().toString());
        List<Donation> donations = new ArrayList<Donation>();
        Donation donation = new Donation();
        donation.setPersonId(person.getId());
        donations.add(new Donation());
        person.setDonations(donations);
        model.addAttribute("person", person);
        return "index";
    }

    @GetMapping("/getPerson")
    @ResponseBody
    public List<Person> getPerson(@RequestParam String term) {
        return personRepository.findTop10ByPhoneNumberContaining(term);
    }

    @GetMapping("/donation")
    public String donationForm(Model model) {
        Person person = new Person();
        person.setId(UUID.randomUUID().toString());
        List<Donation> donations = new ArrayList<Donation>();
        Donation donation = new Donation();
        donation.setPersonId(person.getId());
        donations.add(new Donation());
        person.setDonations(donations);
        model.addAttribute("person", person);
        return "donation";
    }

    @RequestMapping(value = "/submitDonation", method = RequestMethod.POST)
    public String donationSubmit(@ModelAttribute final Person person, RedirectAttributes redirectAttributes) {

        if (person != null && StringUtils.isEmpty(person.getId())) {
            person.setId(UUID.randomUUID().toString());
        }

        if (!CollectionUtils.isEmpty(person.getDonations())) {
            person.getDonations().forEach(donation -> donation.setPersonId(person.getId()));
        }

        personRepository.save(person);
        donationRepository.save(person.getDonations());
        redirectAttributes.addFlashAttribute("saveSuccess", true);
        return "redirect:/";
    }
}
