var Crime=require('./Crime');
var Crime_event=Crime.Crime_event;// when you call Crime_event, just Crime.Crime_event, no () after Crime_event, because the 'Crime_event' is what you export, not Crime_event()
var Crime_Theft=function (Index,Lat,Longt,Year,Month,Day,Time,Weekday,Division,Neighborhood,Crime_type) {

    Crime_event.call(this,Index,Lat,Longt,Year,Month,Day,Time,Weekday,Division,Neighborhood,Crime_type);




}


console.log(Crime_event);

module.exports={events4crime: Crime_Theft};