package com.myflights.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.service.FlightService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class AppController {
    @Autowired
    private FlightService flightService;
    @GetMapping("/find-flights")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    public List<Flight>findFlights(){
        try {
            List<Flight> flights = flightService.findFlightsByDate(origin:null, dest:null , date :null);
            
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    

     return null;

    }
    
}
