import RegisterMock from "./RegisterMock";
import MockTheme from "./MUI/MockTheme";
import "../styles/globals.css";
import "../styles/fonts.css";

export default {
  title: "Auth/Components/Register",
  component: RegisterMock,
};

const Template = (args) => (
  <MockTheme>
    <RegisterMock {...args} />
  </MockTheme>
);
export const Primary = Template.bind({});

Primary.args = {};

export const ForceStyled = Template.bind({});

ForceStyled.args = {
  bgColor: "#fbfbfb",
  bRadius: 15,
};
