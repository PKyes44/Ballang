import React, { PropsWithChildren } from "react";
import QueryProvider from "./_components/tanstack-query.provider";
import AuthProvider from "./_components/auth.provider";

function ProviderLayout({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}

export default ProviderLayout;
