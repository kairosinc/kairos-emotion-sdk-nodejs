/**
  * @module KairosEmotionAPILib
  *  
  * ## Overview
We're building a platform that lets you quickly add Emotion Analysis - https://www.kairos.com/emotion-analysis-api into your apps and services.
We’ve made it simple to connect with Kairos via our REST-style APIs. Client libraries for your favorite languages are coming soon. 

## Help and Support
We'd love to hear feedback from you and we're also here to help if you have any challenges.
We have lots of answers to popular queries in our knowledge base - https://www.kairos.com/support or you can ask us a question - https://www.kairos.com/contact.

  */

var configuration = require('./configuration'),
    EmotionAnalysisController = require('./Controllers/EmotionAnalysisController');


function initializer(){}

//Main functional components of KairosEmotionAPILib
initializer.configuration = configuration;
initializer.EmotionAnalysisController = EmotionAnalysisController;

//Main Models of KairosEmotionAPILib

module.exports = initializer;