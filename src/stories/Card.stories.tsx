import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Highly experienced Team",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu.",
  icon: "correct",
};
