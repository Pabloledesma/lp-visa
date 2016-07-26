new Vue({
    el: '#canvas_booking',
    data: {
        coupon: '',
        showError: false
    },

    methods: {
        validateCoupon: function(){
            this.showError = this.coupon !== 'COPAVISA';
        }
    }
});