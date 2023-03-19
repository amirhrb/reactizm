import LoginMock from "./LoginMock";
import MockTheme from "./MUI/MockTheme";
import "../styles/globals.css";
import "../styles/fonts.css";

export default {
  title: "Auth/Components/Login",
  component: LoginMock,
};

const Template = (args) => (
  <MockTheme>
    <LoginMock {...args} />
  </MockTheme>
);

export const Primary = Template.bind({});
Primary.args = {};

export const ForceStyled = Template.bind({});
ForceStyled.args = {
  bgColor: "#fbfbfb",
  bRadius: 15,
};
