/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import Component0Generator from "src/components/component0generator";

describe("components/component0generator", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<Component0Generator />);
      expect(component).to.not.be.null;
    });

  });

});
