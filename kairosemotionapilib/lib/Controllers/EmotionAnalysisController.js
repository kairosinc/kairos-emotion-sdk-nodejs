/**
 * KairosEmotionAPILib
 *
 * This file was automatically generated for kairos by APIMATIC BETA v2.0 on 01/18/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    CustomAuthUtility = require('../CustomAuthUtility'),
    APIHelper = require('../APIHelper');

var EmotionAnalysisController = {

    /**
     * Create a new media object to be processed.
     * @param {string|null} source    Optional parameter: The source URL of the media.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MediaResponse}
     */

    //prepare headers
    getHeaders: function () {
        var headers = {
            "accept" : "application/json"
        };
        return headers;
    },
        
    
    createMedia : function(source, callback){
        var self = this;
        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/media";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "source" : source
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        // var queryUrl = 'https://api.kairos.com/media?source=http://media.kairos.com/test.flv';

        var headers = self.getHeaders();

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(headers);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                console.log(callback)
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                self.getMediaById(
                    JSON.parse(response.body).id,
                    function (e,r,c) {console.log(r)}
                )
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Returns the results of a specific uploaded piece of media.
     * @param {string} id    Required parameter: The id of the media you are looking for the results from.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getMediaById : function(id, callback){
        var self = this;
        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/media/{id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "id" : id
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);

        var headers = self.getHeaders();

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(headers);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        // function cb(error, response, context) {
        //     if(error){
        //         callback({errorMessage: error.message, errorCode: error.code},null,context);
        //     }else if (response.statusCode >= 200 && response.statusCode <= 206) {
        //         callback(null,JSON.parse(response.body),context);
        //     }else{
        //         //Error handling using HTTP status codes
        //         callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
        //     }
        // }

        var processTimer = Date.now();
        function cb(error, response, context) {
            if (JSON.parse(response.body).status == "Complete"){
                console.log("Success")
                self.deleteMediaById(
                    id,
                    function (e,r,c) {console.log(r)}
                )
                console.log(response.body)
            }
            else {
                currTime = Date.now();
                if ((currTime - processTimer) < (1000 * configuration.api_timeout)) {
                    console.log("Processing  . . .");
                    setTimeout(function(){
                        request(options, cb);
                    },2000)
                }
                else {
                    console.log("Operation timed out")
                }
                    
            }
            
        }
        request(options, cb);
        
        
    },


    /**
     * Delete media results. It returns the status of the operation.
     * @param {string} id    Required parameter: The id of the media.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {MediaByIdResponse}
     */
    deleteMediaById : function(id, callback){
        var self = this;
        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/media/{id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "id" : id
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);

        var headers = self.getHeaders();

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(headers);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "DELETE",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,"Media ID Deleted",context);
                // callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    }

};

module.exports = EmotionAnalysisController;