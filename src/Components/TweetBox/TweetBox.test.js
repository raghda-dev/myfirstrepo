import React from "react";
import { shallow } from "enzyme";
import TweetBox from "./TweetBox";

describe("TweetBox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TweetBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
