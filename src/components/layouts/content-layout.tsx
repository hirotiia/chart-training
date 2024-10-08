type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <div className="mt-32 md:mt-48">
      <div className="mb-10 text-center md:mb-14">
        <h1 className="text-2xl md:text-4xl">{title}</h1>
      </div>
      <div className="">{children}</div>
    </div>
  );
};
