let score: number | string | boolean = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kv: User | Admin = { name: "kv", id: 123 };

kv = { username: "kv", id: 222 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
