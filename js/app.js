var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        arreglo: [1,2,3,4,5,6,7,8,9,10]
    },
    methods: {
        alert(){
            alert(this.data.message);
        }
    },
    computed: {
        mensaje: function(){
           return this.message.toUpperCase();
        }
    }
});