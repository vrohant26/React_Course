import "./App.css";
import RegularCounter from "./1-UseState/RegularCounter";
import UseStateBasics from "./1-UseState/useStateBasics";
import UseStateBasicsArray from "./1-UseState/UseStateBasicsArray";
import UseEffectSecondArgument from "./2-UseEffect/UseEffectSecondArgument";
import UseEffectBasics from "./2-UseEffect/UseEffectBasics";
import UseEffectCleanup from "./2-UseEffect/UseEffectCleanup";
import Navbar from "./Navbar";
import Forms from "./3-Fundamentals/Forms";
import Forms2 from "./3-Fundamentals/Forms2";
import MultipleReturns from "./3-Fundamentals/MultipleReturns";
import ShortCircuit from "./3-Fundamentals/ShortCircuit";
import ShowHideComponents from "./3-Fundamentals/ShowHideComponents";
import UseRef from "./4-useRef/UseRef";
import UseReducer from "./5-useReducer/UseReducer";
import CustomHook from "./6-CustomHook/Randomapp";
import PropDrilling from "./7-UseContext/PropDrilling";
import UseContext from "./7-UseContext/UseContext";
import PropTypes from "./PropTypes/Index";
import PageNotFound from "./PageNotFound";
import PeopleDetails from "./1-UseState/PeopleDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container-sm my-4">
          <Routes>
            <Route path="/" element={<RegularCounter />} />
            <Route path="UseStateBasics" element={<UseStateBasics />} />
            <Route path="UseEffectBasics" element={<UseEffectBasics />} />
            <Route path="UseEffectCleanup" element={<UseEffectCleanup />} />

            <Route path="UseStateBasicsArray" element={<UseStateBasicsArray />}>
              <Route path=":id" element={<PeopleDetails />} />
            </Route>
            <Route
              path="UseEffectSecondArgument"
              element={<UseEffectSecondArgument />}
            />

            <Route path="Forms" element={<Forms />} />
            <Route path="Forms2" element={<Forms2 />} />
            <Route path="MultipleReturns" element={<MultipleReturns />} />
            <Route path="ShortCircuit" element={<ShortCircuit />} />
            <Route path="ShowHideComponents" element={<ShowHideComponents />} />

            <Route path="UseRef" element={<UseRef />} />

            <Route path="UseReducer" element={<UseReducer />} />

            <Route path="CustomHook" element={<CustomHook />} />

            <Route path="PropDrilling" element={<PropDrilling />} />
            <Route path="UseContext" element={<UseContext />} />

            <Route path="PropTypes" element={<PropTypes />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
