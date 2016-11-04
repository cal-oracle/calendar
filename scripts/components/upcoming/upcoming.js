define(['knockout', 'text!components/upcoming/upcoming.html'], function (ko, upcomingtemplate) {

    var upcoming = function (params) {
        var self = this;
        self.list = params.list;
        self.nextten = ko.computed(function () {
            return ko.utils.arrayFilter(self.list(), function (item) {
                return new Date() < new Date(item.date()) 
            }).sort(function (a, b) {
                return a.date() == b.date() ? 0 : (a.date() < b.date() ? -1 : 1);
            }).slice(0,9)			//future paging
        })

    };

    return { viewModel: upcoming, template: upcomingtemplate };
});