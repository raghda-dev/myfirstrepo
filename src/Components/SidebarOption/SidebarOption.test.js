import React from "react";
import { shallow } from "enzyme";
import SidebarOption from "./SidebarOption";

describe("SidebarOption", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SidebarOption />);
    expect(wrapper).toMatchSnapshot();
  });
});
