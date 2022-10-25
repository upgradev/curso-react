import React from "react";

const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>renderizou isso</h1>;
    } else {
      return <h1>Renderizou isso também</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou")}>
          Clique Aqui também
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso nao deveria existir =) ");
            }
          }}
        >
          Clique Aqui por favor
        </button>

      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
