import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test of Component : <GifGrid/>", () => {
  const category = "One Punch Man";

  test("GifGrid : Component Mounts Correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
  test("GifGrid : Component Mounts Correctly With Use Fetch", () => {
    const gifs = [
      { id: "ABC", url: "https://something.com", title: "ABC" },
      { id: "ABCD", url: "https://something2.com", title: "ABCD" },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
