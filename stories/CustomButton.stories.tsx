import type { Meta, StoryObj } from '@storybook/react';


import CustomButton from "../components/CustomButton";

const meta: Meta<typeof CustomButton> = {
    component: CustomButton,
    title: 'CustomButton',
}

export default meta;


export const Red = {
    args: {
        btnType: "button",
        text: "Press me",
    }
}