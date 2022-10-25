import { useState } from "react";
import "./App.css";
import { ChangeMessageState } from "./components/ChangeMessageState";
import { Message } from "./components/Message";

function App() {
  // const name = "Joaquim";
  // const [username] = useState("Thay");

  // const cars = [
  //   { id: 1, brand: "Ferrari", color: "Amarela", novo: true, km: 0 },
  //   { id: 2, brand: "KIA", color: "BRanco", novo: false, km: 233456 },
  //   { id: 3, brand: "Renault", color: "Azul", novo: false, km: 123 },
  // ];

  // function showMessage() {
  //   console.log("evento do componente pai");
  // }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançado em ReactJs</h1>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

      {/* funcoes em props ************************/}
      {/* <ExecuteFunction myFunction={showMessage} /> */}

      {/* children    ***********************/}
      {/* <Container myValue="teste">
        <p>Esté é o conteúdo</p>
      </Container>
      <Container myValue="teste 2">
        <p>Testando container</p>
      </Container> */}

      {/* <Fragment propFragment={"teste"} /> */}

      {/* imagem em public ************************/}
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div> */}

      {/* imagem em asset ************************/}
      {/* <div>
        <img src={City} alt="Paisagem" />
      </div> */}

      {/* <ManageData />
      <ListRender />
      <ConditionalRender /> */}

      {/* props  ************************/}
      {/* <ShowUserName name={username} /> */}

      {/* destructuring ************************/}
      {/* <CarDetails brand="VW" km={100000} color="Azul" novo={false} /> */}

      {/* reaproveitando ************************/}
      {/* <CarDetails brand={"Ford"} km={200000} color="Vermelha" novo={true} />
      <CarDetails brand={"Fiat"} km={300000} color="Branco" novo={false} /> */}

      {/* loop em array onjetos ************************/}
      {/* {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          novo={car.novo}
          key={car.id}
        />
      ))} */}
    </div>
  );
}

export default App;
