/**
  * KairosEmotionAPILib
  *
  * This file was automatically generated for kairos by APIMATIC BETA v2.0 on 01/18/2016
  */

var configuration = require('./configuration');

var CustomAuthUtility = {

    /**
     * Appends the necessary OAuth credentials for making this authorized call
     * @param	{dictionary} headers    The out going request to access the resource
     */

    appendCustomAuthParams:function(headers) {
      headers["Content-Type"] = configuration.contentType
      headers["app_id"]       = configuration.appId
      headers["app_key"]      = configuration.appKey

      return headers

    }
};

module.exports = CustomAuthUtility;