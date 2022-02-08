import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test of Component : <GifGridItem/>", () => {
  const title = "One Punch Man";
  const url =
    "https://media3.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=4938fc14v1f9xsy1na3fmayewogxuckicfc7l11fgjt3yyvj&rid=giphy.gif&ct=g";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("GifGridItem : Component Mounts Correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("GifGridItem : Test PropTypes", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("GifGridItem : Must Have P with the title prop value", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("GifGridItem : Must Have Img Src and Alt with the same url prop value", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
    const props = { alt: title, src: url, title };
    expect(img.props()).toEqual(props);
    expect(img.props()).toStrictEqual(props);
  });

  test("GifGridItem : Classname card", () => {
    const div = wrapper.find("div");
    const divClasses = wrapper.prop("className");
    const className = "card";

    expect(divClasses.includes(className)).toBeTruthy();
    expect(div.hasClass(className)).toBeTruthy();
  });
});
