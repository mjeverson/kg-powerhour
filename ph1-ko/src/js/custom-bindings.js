$(document).ready(function(){

    // element — The DOM element involved in this binding
    // valueAccessor — A JavaScript function that you can call to get the current model property that is involved in this binding. To easily accept both observable and plain values, call ko.unwrap on the returned value.
    // allBindings — A JavaScript object that you can use to access all the model values bound to this DOM element
    // bindingContext -  This object includes special properties including $parent, $parents
/*    ko.bindingHandlers.numericText = {
        update: function(element, valueAccessor, allBindingsAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor()),
                precision = ko.utils.unwrapObservable(allBindingsAccessor().precision) || ko.bindingHandlers.numericText.defaultPrecision,
                formattedValue = value.toFixed(precision);

            ko.bindingHandlers.text.update(element, function() { return formattedValue; });
        },
        defaultPrecision: 1
    };*/

    // Extenders
/*    ko.extenders.logChange = function(target, option) {
        target.subscribe(function(newValue) {
            console.log(option + ": " + newValue);
        });
        return target;
    };*/

});
