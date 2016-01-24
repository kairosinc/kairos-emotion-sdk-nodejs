var kairosemotionapilib = require('./kairosemotionapilib');

var callback = function (e,r,c) {
	if (e != null) {
		console.log(e)
	}
	if (r != null) {
		console.log(r)
	}	
}

var controller = kairosemotionapilib.EmotionAnalysisController;
controller.createMedia('http://media.kairos.com/test.flv', callback);

