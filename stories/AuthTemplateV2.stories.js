import AuthTemplateV2Mock from './AuthTemplateV2Mock';
import MockTheme from './MUI/MockTheme';
import '../styles/globals.css';
import '../styles/fonts.css';

export default {
  title: 'Auth/AuthTemplateV2',
  component: AuthTemplateV2Mock,
};

const Template = (args) => (
  <MockTheme>
    <AuthTemplateV2Mock {...args} />
  </MockTheme>
);
export const Primary = Template.bind({});
Primary.args = {};

export const ForceStyled = Template.bind({});
ForceStyled.args = { contBgColor: '#eee', bgColor: '#fbfbfb', bRadius: '15px' };
