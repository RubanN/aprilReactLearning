import { useState } from "react";
import styled from "styled-components";
import UserLocation from "./UserLocation";
import UserInput from "./UserInput";
import CurrentWeather from "./CurrentWeather";

const Container = styled.section`
 width:100%;
 display:flex;
 justify-content: center;
 align-items: center;
`
const Main = styled.main`
  width:70%;
  display:flex;
  flex-direction: column;
  margin: 4rem 0;
  position: relative;

  @media only screen and(max-width:980px){
    width:90%;

}
`


const MainParent = () => {
    const [input, setInput] = useState("London");
    return (
        <Container>
            <Main>
                <UserLocation changeLocation={setInput} />
                <UserInput value={input} addInput={setInput} />
                <CurrentWeather city={input} />
            </Main>
        </Container>
    )
}

export default MainParent