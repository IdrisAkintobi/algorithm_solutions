import taskOne from "../task/app";
import { prefilled } from "./mock";

describe("Test for function structure", () => {
  //Invalid
  it("Invalid input", () => {
    expect(() => taskOne(-1, 3)).toThrow("Invalid input");
    expect(() => taskOne(20, -1)).toThrow("Invalid input");
  });

  it("Returns an object for even distro", () => {
    let passengers = 5;
    let shuffle = 3;
    expect(taskOne(passengers, shuffle)).toBeInstanceOf(Object);
  });

  it("function is been called with 2 arguments", () => {
    let passengers = 10;
    let shuffle = 3;
    const func = jest.fn(taskOne);
    func(passengers, shuffle);
    expect(func).toHaveBeenCalledWith(passengers, shuffle);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe("Test for function expected value", () => {
  it("Returns evenly distributed values for boarded", () => {
    let passengers = 15;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(15);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(1);
  });

  it("Returns reservation list for uneven distro", () => {
    let passengers = 52;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.boarded[49]).toStrictEqual({
      name: "passenger50",
      location: expect.any(String),
    });
    expect(expected.reservation.length).toBe(2);
  });

  it("Passengers does not exceed 50", () => {
    let passengers = 60;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(1);
  });
});

describe("test for shuffle", () => {
  it("Single shuffle works ", () => {
    let passengers = 60;
    let shuffle = 1;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it("first multiple shuffle works ", () => {
    let passengers = 60;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it("second multiple shuffle works ", () => {
    let passengers = 150;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(3);
  });

  it("third multiple shuffle works ", () => {
    let passengers = 210;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(4);
  });
});
//Testing for the inputs
describe("test for boarded value", () => {
  it("Exactly 50 passengers", () => {
    let passengers = 50;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded).toStrictEqual(prefilled);
  });
  it("Passengers less than 5 goes to reservation", () => {
    let passengers = 4;
    let shuffle = 2;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toEqual(0);
    expect(expected.reservation.length).toEqual(passengers);
  });
  it("Ensure passengers are boarded in 5", () => {
    let passengers = 29;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(25);
    expect(expected.reservation.length).toBe(4);
  });
});
