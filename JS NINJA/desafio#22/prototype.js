(function(win, doc) {
    'use strict';

    function MyFunction( name, lastName ) {
        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {
        return `${this.name} ${this.lastName}`;
    }
    MyFunction.prototype.age = 23;

    var antonio = new MyFunction( 'Antonio', 'Rodrigues' );
    console.log( antonio.fullName() );
    console.log( antonio.age );

})(window, document);