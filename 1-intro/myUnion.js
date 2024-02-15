"use strict";
let score = 33;
score = 44;
score = "55";
let kv = { name: "kv", id: 123 };
kv = { username: "kv", id: 222 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3];
let seatAllotment;
seatAllotment = "aisle";
