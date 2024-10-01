import Page from "@/components/Page/Page";
import React from "react";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <Page width="sm" title="회원가입">
      <SignUpForm />
    </Page>
  );
}

export default SignUpPage;
