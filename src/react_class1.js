import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";

function App() {
  const text = "안녕하세요 김김입니다";
  const sayHello = function () {
    return <h3>인프런 강의 넘 좋아</h3>;
  };
  const sayHello2 = function () {
    alert("안녕하세요");
  };
  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2()}>클릭해주세요</div>
      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="김김" age={28} />
      <ChildComponent name="철수" age={25} />
      <TimerComponent />
    </div>
  );
}

export default App;
