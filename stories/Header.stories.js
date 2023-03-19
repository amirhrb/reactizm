import HeaderMock from "./HeaderMock";
import MockTheme from "./MUI/MockTheme";
import "../styles/globals.css";
import "../styles/fonts.css";

export default {
  title: "Layout/Header",
  component: HeaderMock,
};

const Template = (args) => {
  return (
    <MockTheme>
      <HeaderMock {...args} />
    </MockTheme>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
