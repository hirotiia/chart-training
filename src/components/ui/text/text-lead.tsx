import { cn } from '@/utils/cn';

type TextLeadProps = {
  children: React.ReactNode;
  className?: string;
};

export const TextLead = ({ children, className }: TextLeadProps) => {
  return (
    <p className={cn('text-center md:text-lg', className)}>
      <b>{children}</b>
    </p>
  );
};
