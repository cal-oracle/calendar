define(['knockout', 'model/Event', 'components/miniCalendar/miniCalendar', 'components/addDialog/addDialog'], function (ko, Event, miniCalendar, Dialog) {

    var EventMgr = function (initEvents) {
        var
            today = new Date();
            events = ko.observableArray(ko.utils.arrayMap(initEvents, function () {
                return new Event(initEvents.date, initEvents.desc);
            })),
            addEvent = function (date, desc) {
                //validatation
                events.push(new Event().date(date).desc(desc));
                miniCalendar.update()
            },
            removeEvent = function (x) {
                events.remove(x)
                miniCalendar.update()
            },
            selectedDate = ko.observable(),
            addDialog = function () {
                Dialog.open();
            }//fix
        ;

        return {
            events: events,
            addEvent: addEvent,
            removeEvent: removeEvent,
            selectedDate: selectedDate,
            addDialog: addDialog
        };
    }();

    //quick init
    var TESTDATA = [
        new Event().date('11/3/2016').desc('Work'),
        new Event().date('11/3/2016').desc('Interview'),
        new Event().date('11/4/2016').desc('Assignment Due'),
        new Event().date('11/11/2016').desc('Veteran Day'),
        new Event().date('11/21/2016').desc('Birthday'),
        new Event().date('11/25/2016').desc('Really Long description here to see how the format looks'),
        new Event().date('12/25/2016').desc('xmas?')

    ]
    EventMgr.events(TESTDATA);

    return EventMgr;
})