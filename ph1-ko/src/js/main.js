$(document).ready(function(){
    // The view model for the page
    var ViewModel = function(){
        var self = this;

        // Observables
        self.firstName = ko.observable("Mike").extend({logChange: "first name"});
        self.lastName = ko.observable("Everson");

        // computed
        /*self.fullName = ko.computed(function(){
            return self.firstName() + ' ' + self.lastName();
        });*/

        // Subscribe
        /*self.fullName.subscribe(function(val){
            console.log('color updated: ', val);
        });*/

        // Options
/*        self.selectedColor = ko.observable();
        self.colors = ko.observableArray([{
            name: 'red',
            value: '#800000'
        },{
            name: 'blue',
            value: '#0000FF'
        },{
            name: 'yellow',
            value: '#FFFF00'
        }]);*/

        // Click
        /*self.assignedTextColor = ko.observable('black');
        self.setTextColor = function(){
            self.assignedTextColor(self.selectedColor());
        };*/

        // Templates
        /*self.buyer = { name: 'Franklin', credits: 250 };
        self.seller = { name: 'Mario', credits: 5800 };*/

        // Custom binding
        /*self.unformattedNumber = ko.observable(3.14159);*/

        return self;
    };

    // Initialize the viewmodel and bind to the page
    function init () {
        ko.applyBindings(new ViewModel(), $('#container')[0]);

        // Mapping to/from JSON
        /*console.log('ko.toJSON: ', ko.toJSON(new ViewModel()));
        console.log('ko.toJS: ', ko.toJS(new ViewModel()));
        console.log('_viewModel: ', new ViewModel());*/

        // mapping plugin
        // You can actually use ko.mapping.fromJS(data); and ko.mapping.fromJSON(data); to map your object to a viewmodel without having to manually set values
/*        var data = {
            serverTime: '2010-01-07',
            numUsers: 3
        };
        var viewModel = ko.mapping.fromJS(data);
        console.log('view model: ', viewModel);*/
    }

    // Get this party started!
    init();
});
