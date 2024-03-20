import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./StateVariables/BooleanStateVariables";
import StringStateVariables from "./StateVariables/StringStateVariables";
import DateStateVariable from "./StateVariables/DateStateVariable";
import ObjectStateVariable from "./StateVariables/ObjectStateVariable";
import ArrayStateVariable from "./StateVariables/ArrayStateVariable";
import ParentStateComponent from "./StateComponents/ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterReducer from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Assignment 4</h2>
      <h3>React</h3>
      <h3>Routing</h3>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ParentStateComponent></ParentStateComponent>
      <HelloRedux/>
      <CounterReducer/>
      <AddRedux/>
    </div>
  );
}

export default Assignment4;
