import dynamic from "next/dynamic";
// import Instagram from "@/app/component/Instagram";
import Loading from "./loading";

const Instagram = dynamic(() => import("../../component/Instagram"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Page() {
  return <Instagram />;
}
