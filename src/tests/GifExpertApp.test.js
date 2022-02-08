import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test of Component : <GifExpertApp/>", () => {
  test("GifExpertApp : Component Mounts Correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("GifExpertApp : Component Mounts Correctly", () => {
    const categories = ["One Punch Man", "Goku"];
    const wrapper = shallow(<GifExpertApp initialState={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
