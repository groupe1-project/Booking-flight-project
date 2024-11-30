//package com.myflight.flight.repository;
package com.myflights.flight.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myflights.flight.entity.Flight;


public interface FlightRepository extends JpaRepository<Flight, Integer>{
    List<Flight> findByOriginAndDestAndDepartureDate(String origin, String dest, String departureDate);

}
