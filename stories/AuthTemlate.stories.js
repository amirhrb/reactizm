import AuthTemplateMock from "./AuthTemplateMock";
import MockTheme from "./MUI/MockTheme";
import "../styles/globals.css";
import "../styles/fonts.css";

export default {
  title: "Auth/AuthTemplate",
  component: AuthTemplateMock,
};

const Template = (args) => (
  <MockTheme>
    <AuthTemplateMock {...args} />
  </MockTheme>
);
export const Primary = Template.bind({});
Primary.args = {};

export const ForceStyled = Template.bind({});
ForceStyled.args = { contBgColor: "#eee", bgColor: "#fbfbfb", bRadius: "15px" };
