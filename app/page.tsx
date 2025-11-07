import Image from "next/image";
import Dice from "./components/common/Dice/Dice";
import SwitchToken from "./components/common/SwitchToken/SwitchToken";

export default function Home() {
  return (
    <div>
      <Dice />
      <SwitchToken />
    </div>
  );
}
