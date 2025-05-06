import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import Cycles from "./components/Cycles";
import DefaultInput from "./components/DefaultInput";
import DefaultButton from "./components/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import "./styles/global.css";
import "./styles/theme.css";


export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput id="meuInput" labelText="task" type="text" placeholder="Digite algo" />
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={ <PlayCircleIcon /> } color="green"/>
            <DefaultButton icon={ <StopCircleIcon /> } color="red"/>
          </div>
        </form>
      </Container>
    </>
  );
}