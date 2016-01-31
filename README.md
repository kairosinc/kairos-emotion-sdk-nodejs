KairosEmotionAPILib
=================
This file was automatically generated for kairos by APIMATIC BETA v2.0 on 01/18/2016


How To Install: 
=============
The generated code relies on node package manager (npm) being available to resolve dependencies.

Dependencies:
node.js
request: sudo npm install request

  
How To Use:
===========
The following shows how import the controllers and use (demonstrated in EmotionAnalysisControllerTest.js):

1) Import the module:

        var kairosemotionapilib = require('./kairosemotionapilib');

2) Configure any authentication parameters in configuration.js file:

		appId : "app_id"
        appKey : "app_key"

3) Access various controllers by:

        var controller = kairosemotionapilib.kairosemotionapilib;
        controller.createMedia({file path}, callback);

        cd into the directory and run node EmotionAnalysisControllerTest.js


    

