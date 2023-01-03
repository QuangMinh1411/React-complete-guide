import { useCallback, useState, useMemo } from "react";
import "./App.css";
import Button from "./component/UI/Button";
// import DemoOutput from "./component/Demo/DemoOutput";
import DemoList from "./component/Demo/DemoList";
function App() {
  // const [para, showPara] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // //use to store the object, function
  // const toggleHandler = useCallback(() => {
  //   if (allowToggle) {
  //     showPara((prevPara) => !prevPara);
  //   }
  // }, [allowToggle]);
  // const toggleAllow = () => {
  //   setAllowToggle(true);
  // };
  // console.log("App change");

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      {/* {para && <p>This is new</p>} */}
      {/* <DemoOutput show={para} />
      <Button onClick={toggleAllow}>Allow toggle</Button>
      <Button onClick={toggleHandler}>Show Paragraph</Button> */}

      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
