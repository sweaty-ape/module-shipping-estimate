$.mixin('Swissup_Breeze/js/components/estimate-shipping', {
    defaults: {
        city: '',
    },

    create: function(parent) {
        this.observe('city');

        this.city.subscribe(this.updateShippingAddress.bind(this));

        parent();
    }
});