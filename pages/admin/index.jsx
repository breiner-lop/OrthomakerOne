import React from "react";
import Layout from "../../components/LayoutAdmin";
import { useRouter } from "next/router";
export default function Home() {
    const Router = useRouter();
    React.useEffect(() => {
      const token = localStorage.getItem("token");
      token ? Router.push("/admin") : Router.push("/login");
    },[]);
  return (
    <>
      <Layout>home view</Layout>
    </>
  );
}
