"use strict";

angular.module("igWeather", [
	"landingModule",
  	"sharedModule"
	])

  .constant("version", "v0.1.0")

  .config(function($locationProvider) {

    $locationProvider.html5Mode(false);

  });

