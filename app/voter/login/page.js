import dynamic from "next/dynamic";
// import Instagram from "@/app/component/Instagram";
import Loading from "./loading";

const Login = dynamic(() => import("../../component/Login"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Page() {
  return <Login />;
}
