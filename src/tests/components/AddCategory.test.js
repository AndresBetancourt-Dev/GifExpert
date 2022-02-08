import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import AddCategory from "../../components/AddCategory";

describe("Test of Component : <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("AddCategory : Component Mounts Correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("AddCategory : Handle Input Change is Called", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", {
      target: {
        value,
      },
      preventDefault: () => {},
    });
  });

  test("AddCategory : Shouldn't submit", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("AddCategory : Simulate Input Change, Submit, setCategories", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", {
      target: {
        value,
      },
      preventDefault: () => {},
    });
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
