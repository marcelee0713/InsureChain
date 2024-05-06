import { Outlet, useOutletContext } from "react-router-dom";
import useSWR from "swr";
import { getUser } from "../api/fetchers/user.fetcher";
import { AuthLoading } from "../components/auth/loading";
import { User } from "../interfaces/user.interface";

const InsuranceLayout = () => {
  const { data, isLoading } = useSWR<User>("/getUserSession", getUser, {
    onError() {
      window.location.href = "/auth/sign-in";
    },
    onSuccess(data) {
      if (data.isInsuranceCompany === "NO") {
        window.location.href = "/home/dashboard";
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

  if (data && data.isInsuranceCompany === "YES") {
    return (
      <main
        id="default-layout"
        className="relative h-screen w-full bg-primary font-openSans flex overflow-y-auto"
      >
        <Outlet context={{ ...data } satisfies User} />
      </main>
    );
  }
};

export function useUser() {
  return useOutletContext<User>();
}

export default InsuranceLayout;
