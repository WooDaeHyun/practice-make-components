import Image from "../components/Image/Image";

export default {
  title: "component/Image",
  component: Image,
  argTypes: {
    lazy: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    block: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    src: {
      name: "src",
      type: { name: "string" },
      defaultValue: "https://picsum.photos/200",
      control: { type: "text" },
    },
    placeholder: {
      name: "src",
      type: { name: "string", require: true },
      defaultValue: "https://via.placeholder.com/200",
      control: { type: "text" },
    },
    threshold: {
      type: { name: "number" },
      threshold: 0.5,
      control: { type: "number" },
    },
    width: {
      name: "width",
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      name: "height",
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    alt: {
      name: "alt",
      control: "string",
    },
    mode: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args) => {
  return (
    <>
      <Image {...args}>Image</Image>
      <Image {...args}>Image</Image>
    </>
  );
};

export const Lazy = (args) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} block src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  );
};
