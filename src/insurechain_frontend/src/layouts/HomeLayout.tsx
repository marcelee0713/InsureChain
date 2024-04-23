import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import useSWR from "swr";
import { User } from "../interfaces/user.interface";
import { getUser } from "../fetchers/user.fetcher";
import { AuthLoading } from "../components/auth/loading";

const HomeLayout = () => {
  const { data, isLoading } = useSWR<User>("/getUser", getUser, {
    onError() {
      window.location.href = "/auth/sign-in";
    },
  });

  if (isLoading) {
    return (
      <main
        id="default-layout"
        className="relative h-screen w-full bg-primary font-openSans container mx-auto flex justify-center items-center"
      >
        <AuthLoading />
      </main>
    );
  }

  if (data) {
    return (
      <section className="flex">
        <Navigation />
        <div className="h-screen bg-primary flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </section>
    );
  }
};

export default HomeLayout;
