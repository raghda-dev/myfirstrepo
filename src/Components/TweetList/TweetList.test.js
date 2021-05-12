import React from "react";
import { shallow } from "enzyme";
import TweetList from "./TweetList";

describe("TweetList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TweetList />);
    expect(wrapper).toMatchSnapshot();
  });
});
