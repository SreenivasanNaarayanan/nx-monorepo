package com.deere.dse.servicecenterapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @GetMapping(value = "/test")
  public String getTestData() {

    return "Welcome to Test";
  }
}
