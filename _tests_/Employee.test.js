const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return a new employee object which contains properties of name,id and email when called with the 'new' keyword", () => {
            const emp = new Employee();
            expect("name" in emp).toEqual(true);
            expect("id" in emp).toEqual(true);
            expect("email" in emp).toEqual(true);
        });
        it("should set 'name','id' and 'email' when created", () => {
            const name = 'Tom';
            const id = 1;
            const email='tom@gmail.com'
            const emp = new Employee(name,id,email);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
        });
    })

    describe("getName", () => {
        it("should return the name of employee", () => {
          const name = "Tom";
          const id = 1;
          const email = "tom@gmail.com";
          const emp = new Employee(name, id, email);
          expect(emp.getName()).toEqual(name);
      });
    });

    describe("getId", () => {
      it("should return the id of employee", () => {
        const name = "Tom";
        const id = 1;
        const email = "tom@gmail.com";
        const emp = new Employee(name, id, email);
        expect(emp.getId()).toEqual(id);
      });
    });

    describe("getEmail", () => {
      it("should return the email of employee", () => {
        const name = "Tom";
        const id = 1;
        const email = "tom@gmail.com";
        const emp = new Employee(name, id, email);
        expect(emp.getEmail()).toEqual(email);
      });
    });

    describe("getRole", () => {
      it("should return 'Employee'", () => {
        const name = "Tom";
        const id = 1;
        const email = "tom@gmail.com";
        const emp = new Employee(name, id, email);
        expect(emp.getRole()).toEqual('Employee');
      });
    });
})