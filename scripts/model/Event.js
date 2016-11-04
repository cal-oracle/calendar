define(['knockout'], function (ko) {
    var Event = function (date, desc) {
        this.selected = ko.observable(false)
        this.date = ko.observable(date)
        this.desc = ko.observable(desc)
    };
    return Event;
});