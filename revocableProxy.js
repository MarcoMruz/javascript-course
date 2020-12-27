'use strict';

// good way to go is to use revoke with weakMap easy access to wherever to element and revoked it from memory

let object = {
    data: "valuable data"
};

let { proxy, revoke } = Proxy.revocable(object, {});

console.log( proxy.data ); // we can access here

revoke(); // removed from "storage"

console.log( proxy.data ); // not accessible anymore