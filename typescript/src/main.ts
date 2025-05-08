{
  // 1. ----------- Optional Parameters -----------
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);

  // console.log(formatString("Hello"));
  // console.log(formatString("Hello", true));
  // console.log(formatString("Hello", false));

  // 2. --------- Type Aliases and Array Filtering -----------

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  filterByRating(books);
  // console.log(filterByRating(books));

  // 3. ------------ Generics and Rest Parameters -----------

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
  }
  concatenateArrays(["a", "b"], ["c"]);
  // console.log(concatenateArrays(["a", "b"], ["c"]));
  // console.log(concatenateArrays([1, 2], [3, 4], [5]));

  // 4. ------------- Classes, Access Modifiers, and Inheritance -----------

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  // console.log(myCar.getInfo());
  // console.log(myCar.getModel());

  // 5. -----------Union Types and Type Narrowing --------------

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue("hello");
  processValue(10);

  // 6. ------------ Interfaces, Array Methods -----------

  interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, current) =>
      current.price > max.price ? current : max
    );
  }

  // console.log(getMostExpensiveProduct(products))

  // 7. -------------Enums and Type Narrowing -------------

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): "Weekday" | "Weekend" {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  // console.log(getDayType(Day.Monday))
  // console.log(getDayType(Day.Sunday))

  // 8. ----------- Async / Await, Promises, and Error Handling ------------

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
