"use client";
import { button } from "@/theme";
import { useState } from "react";
import { founds } from "@/services";
import { updateFounds } from "@/actions";
import { GithubIcon } from ".";
import { useSupabase } from "@/hooks";

interface Props {
  children?: React.ReactNode;
}

export const SignInButton: React.FC<Props> = ({ children }) => {
  const classNames = button({ color: "primary" });

  const supabase = useSupabase();
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    console.log('handleSignIn')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    console.log('AQUI', data, error)
  }

  return (
    <button className={classNames} onClick={handleSignIn}>
      <GithubIcon /> Sign in With Github
    </button>
  );
};
