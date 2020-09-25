import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Alert, AlertProps } from "./Alert";

export default {
    title: 'Components/Alert',
    component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = { description: "Info" };

export const InfoCustom = Template.bind({});
InfoCustom.args = {
    description: "Info",
    message: "We're going to change this around later."
};

export const Success = Template.bind({});
Success.args = { description: "Success" };

export const SuccessCustom = Template.bind({});
SuccessCustom.args = {
    description: "Success",
    message: "Item completed successfully."
};

export const Error = Template.bind({});
Error.args = { description: "Error" };

export const ErrorCustom = Template.bind({});
ErrorCustom.args = {
    description: "Error",
    message: "Loading failed. Please try again."
};

export const Warning = Template.bind({});
Warning.args = { description: "Warning" };

export const WarningCustom = Template.bind({});
WarningCustom.args = {
    description: "Warning",
    message: "Some edits didn't quite load."
};