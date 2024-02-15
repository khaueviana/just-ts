const User = {
  name: "kv",
  email: "kv@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "kv", isPaid: false, email: "kv@kv.com" };

-(
  // createUser(newUser);

  function createCourse(): { name: string; price: number } {
    return { name: "kv", price: 123 };
  }
);

export {};
