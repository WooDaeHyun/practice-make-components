import Spinner from "../components/Spinner/Spinner";

export default {
  title: "component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: "number",
    },
    color: {
      control: "color",
    },
    loading: {
      defaultValue: true,
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return <Spinner {...args} />;
};
