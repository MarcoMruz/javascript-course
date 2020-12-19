'use strict';

function work(a, b) {
    console.log( a + b );
}

function spy(func) {
    
    function wrapper (...args) {
        wrapper.calls.push(args);
        return func.apply(this, args); // can be used without apply because we dont need to use another props in work function
    }
    
    wrapper.calls = [];
    
    return wrapper;
};

work = spy( work );

work( 1, 3 );
work( 4, 5 );

for (let args of work.calls) {
    console.log( 'call: ' + args.join() );
}
