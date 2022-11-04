import { useTitleColorContext } from "../hooks/useTitleColorContext";

export const Home = () => {
  // const {counter} = useContext(CounterContext);
  //   const { counter } = useCounterContext();

  // 5 context complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      {/* 6 alterando context */}
      <div>
            <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
            <button onClick={()=> setTitleColor("BLUE")}>Vermelho</button>
      </div>
      {/* <p>Valor do contator: {counter}</p> */}
      {/* 3 alterando valor contexto */}
      {/* <ChangeCounter /> */}
    </div>
  );
};
