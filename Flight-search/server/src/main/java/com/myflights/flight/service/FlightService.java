package com.myflights.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.repository.FlightRepository;
 
@Service
public class FlightService {
@Autowired
private FlightRepository repo;


public void saveFlight(Flight flight){
    repo.saveAndFlush(flight);
}
public List<Flight> findFlightsByDate(String origin, String dest, String date){
    return repo.findByOriginAndDestAndDepartureDate(origin, dest, date);
}
public List<Flight> findFlightsBetween(String starDate,String endDate){
    return repo.findByDepartureDateBetween(starDate, endDate);
}
//public FlightRepository getRepo() {
  //  return repo;
//}
//public void setRepo(FlightRepository repo) {
    //this.repo = repo;
//}
    
}
