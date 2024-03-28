const ClerkLayout = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
      <div className="h-full flex items-center justify-center pt-20">
        {children}
      </div>
    );
  };
  
  export default ClerkLayout;