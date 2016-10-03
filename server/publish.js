import {Meteor } from "meteor/meteor";

Meteor.publish("questions", function(){
	return QUESTIONS.find({user:this.userId});
})