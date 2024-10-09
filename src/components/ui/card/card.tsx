type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-center text-2xl font-bold text-foregroundDark">
        {title}
      </h2>
      {children}
    </div>
  );
};
