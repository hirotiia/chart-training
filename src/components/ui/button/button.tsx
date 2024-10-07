import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-primary bg-primary text-primary-foreground hover:border hover:border-primary hover:bg-white hover:text-primary',
        secondary:
          'border border-secondary bg-secondary text-secondary-foreground hover:border hover:border-secondary hover:bg-white hover:text-secondary',
        destructive:
          'border border-destructive bg-destructive text-destructive-foreground hover:border hover:border-destructive hover:bg-white hover:text-destructive',
        muted:
          'border border-muted bg-muted text-muted-foreground hover:border hover:border-muted hover:bg-white hover:text-muted',

        accent:
          'border border-accent bg-accent text-accent-foreground hover:border hover:border-accent hover:bg-white hover:text-accent',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'size-9',
      },
      rounded: {
        default: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonVariants> & {
    as?: 'button' | 'a' | 'div';
    icon?: React.ReactNode;
    children: React.ReactNode;
    href?: string;
  };

const Button = ({
  as: Component = 'button',
  icon,
  children,
  variant,
  size,
  rounded,
  className,
  href,
  ...props
}: ButtonProps) => {
  const buttonVariantsProps = { variant, size, rounded, className };

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="mx-2">{children}</span>
    </>
  );

  return Component === 'a' && href ? (
    <Link
      className={cn(buttonVariants(buttonVariantsProps))}
      href={href}
      {...props}
    >
      {content}
    </Link>
  ) : (
    <Component className={cn(buttonVariants(buttonVariantsProps))} {...props}>
      {content}
    </Component>
  );
};

export { Button };
