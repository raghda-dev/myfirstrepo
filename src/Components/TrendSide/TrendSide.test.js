import React from "react";
import { shallow } from "enzyme";
import TrendSide from "./TrendSide";

describe("TrendSide", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TrendSide />);
    expect(wrapper).toMatchSnapshot();
  });
});
