"use strict";
var Alexa = require("alexa-sdk");
exports.handler = function(event, context,callback){
  var alexa = Alexa.handler(event, context, callback);
  alexa.dynamoDBTableName = "MyThingsAndPlaces";
  alexa.appId = "";
  alexa.registerHandlers(Handler);
  alexa.execute();
};

var Handler = {
  "LaunchRequest" : function() {
    this.emit(":askWithCard", "Hi you can ask me to remember your thing and place", "Hi you can ask me to remember your thing and place," ,"Remember Skill", "Hi you can ask me to remember your thing and place");
  },
  "AddThingsIntent": function() {
    var ThingName = this.event.request.intent.slots.ThingName.value;
    var PlaceName = this.event.request.intent.slots.PlaceName.value;
    if(this.attributes.Place === undefined){
      this.attributes.Place = {};
    }
    this.attributes.Place[ThingName] = PlaceName;
    this.emit(':tell', "I will remember that your " + ThingName + " is in your " + PlaceName);
  }
};
