package com.myflights.flight.controller;
//import java.awt.TrayIcon;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.reponse.ObjectReponse;
import com.myflights.flight.service.FlightService;

//import io.micrometer.core.ipc.http.HttpSender;
@RestController
public class AppController {
    @Autowired
    private FlightService flightService;
    @GetMapping("/find-flights")


    public ResponseEntity<ObjectReponse>findFlights(@RequestParam() String origin, @RequestParam String dest, @RequestParam() String date) {
    
        ObjectReponse resp = new ObjectReponse();
    

   // public List<Flight>findFlights(@RequestParam() String origin, @RequestParam() String dest, @RequestParam() String date){
        try {
            List<Flight> flights = flightService.findFlightsByDate( origin,dest,date );
            resp.setResponseData(flights);
            resp.setStatusCode(HttpStatus.OK);
            resp.setMessageType("SUCCESS");
        } catch (Exception ex) {
            resp.setStatusCode(HttpStatus.BAD_REQUEST);
            resp.setMessage("Error occured on the server");
            resp.setMessageType("ERROR");
            ex.printStackTrace();
        }
        return new ResponseEntity<ObjectReponse>(resp, resp.getStatusCode());
    }  
}
