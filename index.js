"use strict";
var Alexa = require("alexa-sdk");
exports.handler = function(event, context,callback){
  var alexa = Alexa.handler(event, context, callback);
  alexa.dynamoDBTableName = "MyThingsAndPlaces";
  alexa.appId = "amzn1.ask.skill.c32f8215-aa34-47fb-9c94-d8cf0cae0e97";
  alexa.registerHandlers(Handler);
  alexa.execute();
}

var Hander = {
  "LaunchRequest" : function() {
    this.emit(":askWithCard", "Hi you can ask me to remember your thing and place", "Hi you can ask me to remember your thing and place," "Remember Skill", "Hi you can ask me to remember your thing and place");
  },
  "AddThingsIntent": function() {
    var ThingName = this.event.request.intent.slots.ThingName.value;
    var PlaceName = this.event.request.intent.slots.PlaceName.value;
  }
}
