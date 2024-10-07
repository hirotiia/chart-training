type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <div className="">
      <div className="">
        <h1>{title}</h1>
      </div>
      <div className="">{children}</div>
    </div>
  );
};
