// importacao componentes
import { createContext } from "react";
import Context from "./components/Context";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

// 9 type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Ana";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 funções
  const userGreeting = (name: string): string => {
    return `Ola, ${name}`;
  };

  const myText: textOrNull = "tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const testandoFixed: fixed = "Aquilo";

  // 10 context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3> {userGreeting(name)} </h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="primeiro conteudo"
          comentQtdy={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Segundo conteudo feito"
          comentQtdy={5}
          tags={["ts", "js", "php", "mysql"]}
          category={Category.P}
        />

        {/* 6 usestate */}
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        {testandoFixed && <p>testando fixed: {testandoFixed}</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
