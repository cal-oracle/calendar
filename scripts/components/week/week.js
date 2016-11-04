define(['knockout', 'text!components/week/week.html'], function (ko, weektemplate) {
    var week = function (params) {
        var self = this;
        dates=['sun','mon','tues','wed','thur','fri','sat'];
        //probably should be elsewhere
        self.dateformat=function(value){
        	return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
        }
        self.addDays = function(date,days){
			var result = new Date(date);
		    result.setDate(result.getDate() + days);
		    return result;
        }

        self.text = params.selectedDate
        self.text.subscribe(function(x){
        	//update week info
        	var selectedDate = new Date(x)
            var selectedDayIndex = selectedDate.getDay()
            
            var startindex = selectedDayIndex%7*-1;


            for (var i = 0; i < 7; i++){
				var index = startindex+ selectedDayIndex+i
				var day = dates[(index)%7]
	            self[day + 'date'](self.dateformat(self.addDays(selectedDate,startindex+i)))

	        }
            //poplate info with data?
            //self[day + 'info']()
        })

        

		self.sundate= ko.observable();
		self.mondate= ko.observable();
		self.tuesdate= ko.observable();
		self.weddate= ko.observable();
		self.thurdate= ko.observable();
		self.fridate= ko.observable();
		self.satdate= ko.observable();

		self.suninfo=ko.observable();
		self.moninfo=ko.observable();
		self.tuesinfo=ko.observable();
		self.wedinfo=ko.observable();
		self.thurinfo=ko.observable();
		self.friinfo=ko.observable();
		self.satinfo=ko.observable();


    };

    return { viewModel: week, template: weektemplate };
});