QUESTIONS =new  Mongo.Collection("question");

QUESTIONS.allow({
	insert:function(userId,options){
		return !!(userId);
	}
});
ANSWER = new Mongo.Collection("answer");
var AnswerSchema = new SimpleSchema({
	the_answer: {
		type: String,
		label: "Respuestas"
	},
	the_correct: {
		type: Boolean,
		label:"Correcta"
	}
});
var QuestionsSchema = new SimpleSchema({
	the_question: {
		type: String,
		label: "Pregunta"
	},
	the_answer:{
		type:[AnswerSchema],
		label:"Respuestas"
	},
	user: {
		type: String,
		label:"Usuario",
		autoform: {
			type:"hidden"
		},
		autoValue: function(){
			return this.userId;
		}
	},
	create_at: {
		type: Date,
		autoValue:function(){
			return new Date();
		},
		autoform: {
			type:"hidden"
		},
	}
});
QUESTIONS.attachSchema(QuestionsSchema);
ANSWER.attachSchema(AnswerSchema);