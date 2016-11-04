define(['knockout', 'jqueryui', 'text!components/miniCalendar/miniCalendar.html'], function (ko, $, template) {

    // var viewmodel = function (params) {
    //     var self = this;
    //     //self.elem = $("#mini-calendar");
    //     self.list = params.list();
    //     self.text = ko.observable('hi');
    //     //elem.datepicker();
    // };
    // return { viewmodel: viewmodel, template: template }


    var minicalendar = function () {
        var elem ,
            eventMgr, 
        
        init = function (EventMgr) {
            eventMgr = EventMgr
            elem = $("#miniCalendar"),
			elem.datepicker({
	            beforeShowDay: function (date) {
	                var hash = eventMgr.events().reduce(function (x, y) {
	                    x[new Date(y.date())] = new Date(y.date()).toString()
	                    return x
	                }, {});
	                var highlight = hash[date]
	                if (highlight) {
	                    return [true, "event", highlight];
	                } else {
	                    return [true, '', ''];
	                }
	            },
	            onSelect: function (dateText, inst) {
	                var datestring = dateText;
	                eventMgr.selectedDate(datestring);
	                var dateobject = $(this).datepicker('getDate');
	            }
	        });
    	}
    	update = function(){
    		elem.datepicker("refresh")
    	}
    	return {
    		init:init,
    		update:update
    	}
    }();

    return minicalendar;
})