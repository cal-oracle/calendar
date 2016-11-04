require.config({
    baseUrl: '/scripts/',
    paths: {
        knockout: 'knockout-3.4.0',
        jquery: 'jquery-1.10.2.min',
        jqueryui: 'jquery-ui-1.10.4.min',
        text: 'text'
    },
    shim: {
        "jqueryui": {
            exports: "$",
            deps: ['jquery']
        }
    }
})


require([
    'knockout',
    'jqueryui',
    'viewmodel/EventMgr',
    'components/addDialog/addDialog',
    'components/miniCalendar/miniCalendar'

], function (ko, $, EventMgr, addDialog, miniCalendar) {
    $(function () {

        //register components
        //ko.components.register('', { require: '' })
        // ko.components.register('mini-calendar', { require: 'components/mini-calendar/mini-calendar' })
        ko.components.register('upcoming', { require: 'components/upcoming/upcoming' })
        ko.components.register('week', { require: 'components/week/week' })

        ko.applyBindings(EventMgr);

        addDialog.init(EventMgr.addEvent);
        miniCalendar.init(EventMgr);
    })
})