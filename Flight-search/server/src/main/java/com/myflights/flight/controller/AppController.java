package com.myflights.flight.controller;
//import java.awt.TrayIcon;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.reponse.ObjectReponse;
import com.myflights.flight.service.FlightService;




//import io.micrometer.core.ipc.http.HttpSender;
@RestController
public class AppController {
    private static final Logger logger = LoggerFactory.getLogger(AppController.class);
    @Autowired
    private FlightService flightService;
    @GetMapping("/find-flights/{origin}/{dest}/{date}")


   // public ResponseEntity<ObjectReponse>findFlights(@RequestParam() String origin, @RequestParam String dest, @RequestParam() String date) {
    public ResponseEntity<ObjectReponse>findFlights(@PathVariable() String origin, @PathVariable String dest, @PathVariable() String date) {
        ObjectReponse resp = new ObjectReponse();
    

   // public List<Flight>findFlights(@RequestParam() String origin, @RequestParam() String dest, @RequestParam() String date){
        try {
            //List<Flight> flights = flightService.findFlightsByDate( origin,dest,date );
            List<Flight> flights = flightService.findFlights(origin, dest);
            resp.setResponseData(flights);
            resp.setStatusCode(HttpStatus.OK);
            resp.setMessageType("SUCCESS");
        } catch (Exception ex) {
            resp.setStatusCode(HttpStatus.BAD_REQUEST);
            resp.setMessage("Error occured on the server");
            resp.setMessageType("ERROR");
           // ex.printStackTrace();
           logger.error("An error occurred", ex);
        }
        return new ResponseEntity<>(resp, resp.getStatusCode());
    }  
}
