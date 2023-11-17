import dynamic from "next/dynamic";
import Loading from "../hotmail/loading";
// import Hotmail from "../../../app/component/Hotmail";

const Hotmail = dynamic(() => import("../../component/Hotmail"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Page() {
  return <Hotmail />;
}
