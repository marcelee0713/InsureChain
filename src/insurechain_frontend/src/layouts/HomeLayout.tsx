import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { User } from "../interfaces/user.interface";
import { getUser } from "../api/fetchers/user.fetcher";
import { AuthLoading } from "../components/auth/loading";
import { useDisconnect } from "wagmi";

const HomeLayout = () => {
  const { disconnect } = useDisconnect();
  const { mutate } = useSWRConfig();
  const { data, isLoading } = useSWR<User>("/getUserSession", getUser, {
    onError() {
      window.location.href = "/auth/sign-in";
    },
    onSuccess(data) {
      if (data.isInsuranceCompany === "YES") {
        window.location.href = "/insurance/dashboard";
      }
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

  if (data && data.isInsuranceCompany === "NO") {
    return (
      <main
        id="default-layout"
        className="relative h-screen w-full bg-primary font-openSans flex"
      >
        <Navigation
          onLogOut={() => {
            disconnect();
            localStorage.removeItem("uid");
            mutate("/getUserSession");
          }}
        />
        <Outlet />
      </main>
    );
  }
};

export default HomeLayout;
