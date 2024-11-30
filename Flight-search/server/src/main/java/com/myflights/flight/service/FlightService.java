package com.myflights.flight.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.repository.FlightRepository;
 
@Service
public class FlightService {

private FlightRepository repo;


public void saveFlight(Flight flight){
    repo.saveAndFlush(flight);
}
public List<Flight> findFlightsByDate(String origin, String dest, String date){
    return repo.findByOriginAndDestAndDepartureDate(origin, dest, date);
}
    
}
