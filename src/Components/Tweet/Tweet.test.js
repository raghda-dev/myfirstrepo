import React from "react";
import { shallow } from "enzyme";
import Tweet from "./Tweet";

describe("Tweet", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tweet />);
    expect(wrapper).toMatchSnapshot();
  });
});
