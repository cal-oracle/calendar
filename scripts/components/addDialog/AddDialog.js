define(['jqueryui', 'knockout', 'text!components/addDialog/addDialog.html'], function ($, ko, template) {
    var addDialog = function () {
        var dialog,
            date,
            desc,
            init = function (addEvent) {
                $('body').append(template)

                dialog = $('#addEventDialog');
                date = $(dialog).find('#date');
                desc = $(dialog).find('#desc');

                date.datepicker()
                dialog.dialog({
                    autoOpen: false,
                    width: 320,
                    height: 250,
                    modal: true,
                    buttons: {
                        Add: function () {
                            addEvent(date.val(), desc.val());
                            clear();
                        },
                        Cancel: function () {
                            clear();
                        }
                    }
                })
            },
            open = function () { dialog.dialog("open") },
            close = function () { dialog.dialog("close") },
            clear = function () {
                date.val('');
                desc.val('');
                close();
            }


        return {
            init: init,
            open: open,
            close: close
        }
    }();

    return addDialog;
})