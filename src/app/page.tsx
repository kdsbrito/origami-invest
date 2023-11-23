'use client';
import { Button, GithubIcon, Logo } from '@/components';
import { SignInButton } from '@/components/sign-in-button';
import { useSupabase } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const supabase = useSupabase();
export default function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  

  const router = useRouter();
  
  const signInWithProvivider = async (provider: 'github') => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  const signinWithUsernamePassword = async () => {
    // TODO: sign in with username and password
  }

  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    return (
      <div>
        Logged in!
        <button onClick={async () => await supabase.auth.signOut()}>
          Sair{' '}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
        <Logo className="h-16 w-16 mb-6" />
        <form className="flex flex-col space-y-4 max-w-xs w-full">
          <div>
            <label
              htmlFor="email"
              className="font-semibold text-foreground text-xs pb-1"
            >
              Email address
            </label>
            <input
              name="email"
              className="py-2 px-4 h-10 text-sm focus:outline-none transition-colors w-full focus:border-primary autofill:!bg-transparent autofill:!appearance-none autofill:!s rounded-md border border-stroke text-foreground bg-black/10 focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-background"
              type="text"
              autoSave="false"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-semibold text-foreground text-xs pb-1"
            >
              Password
            </label>
            <input
              name="password"
              className="py-2 px-4 h-10 text-sm focus:outline-none transition-colors w-full focus:border-primary rounded-md border border-stroke text-foreground bg-black/10 focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-background"
              type="password"
            />
          </div>
          <div className="h-1" aria-hidden="true" />
          <Button className="w-full">Sign In</Button>
        </form>

        <div className="relative w-full py-6">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-background px-6 text-foreground text-xs">
              Or continue with
            </span>
          </div>
        </div>

        <div className="flex space-x-4 w-full">
          <Button className="w-full" color="neutral" onClick={() => signInWithProvivider('github')}>
            <GithubIcon className="h-5 w-5 mr-2" /> Github
          </Button>
        </div>
      </div>
    </div>
  );
}

/*
<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>


      <label className="text-md" htmlFor="email">
      Email
    </label>
    <input
      className="rounded-md px-4 py-2 bg-inherit border mb-6"
      name="email"
      placeholder="you@example.com"
      required
    />
    <label className="text-md" htmlFor="password">
      Password
    </label>
    <input
      className="rounded-md px-4 py-2 bg-inherit border mb-6"
      type="password"
      name="password"
      placeholder="••••••••"
      required
    />
    <button onClick={signIn} className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
      Sign In
    </button>

    {searchParams?.message && (
      <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
        {searchParams.message}
      </p>
    )}
</div>

*/
