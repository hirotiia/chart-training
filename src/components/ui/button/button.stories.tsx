import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta: Meta<typeof Button> = {
  title: 'UI/Button', // Storybook上で表示されるコンポーネント名
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'muted',
        'accent',
        'login',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    rounded: {
      control: 'select',
      options: ['default', 'lg', 'md', 'sm'],
    },
    icon: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    as: {
      control: 'select',
      options: ['button', 'a', 'div'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const WithIcon: Story = {
  args: {
    icon: '🔔',
  },
};

export const LinkButton: Story = {
  args: {
    as: 'a',
    href: '#',
  },
};
