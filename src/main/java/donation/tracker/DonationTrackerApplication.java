package donation.tracker;

import org.h2.tools.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.sql.SQLException;

//@SpringBootApplication
@ComponentScan
@EnableAutoConfiguration
public class DonationTrackerApplication {

	public static void main(String[] args) {
//		try {
//			Server server = Server.createTcpServer("-tcpPort", "9292", "-tcpAllowOthers").start();
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}

		SpringApplication.run(DonationTrackerApplication.class, args);
	}
}
