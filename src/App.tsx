import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

export default function App() {
  return (
    <>
      <Heading>
        Hello World
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}