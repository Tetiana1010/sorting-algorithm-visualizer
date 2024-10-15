import React, { useContext, useState } from "react";
import "../styles/Tray.css";
import { DataContext } from "./Form";
import Bar from "./Bar";
import BubbleSort from "../algorithms/BubbleSort";
import cocktailShakerSort from "../algorithms/cocktailShakerSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";

function Tray(props) {
  const data = useContext(DataContext);
  const [speed] = useState(0);
  const [jump] = useState(0);

  function sort() {
    console.log("This is from the sorting function ");
    if (document.getElementById("isSorted").value === "1") {
      return;
    }
    console.log("this is after the if statement of the sorting function ");
    document.getElementById("isSorted").value = "1";
    document.getElementById("sortingButton").disabled = true;
    document.getElementById("generateButton").disabled = true;
    console.log("this is the value of props.algorithm: ", props.algorithm);

    switch (props.algorithm) {
      case "bubbleSort": {
        console.log("This is from the bubble sort case");
        BubbleSort(props.data, props.setData, speed, jump);
        break;
      }
      case "selectionSort": {
        selectionSort(props.data, props.setData, speed, jump);
        break;
      }
      case "insertionSort": {
        insertionSort(props.data, props.setData, speed, jump);
        break;
      }
      case "cocktailShakerSort": {
        cocktailShakerSort(props.data, props.setData, speed, jump);
        break;
      }
      default: {
        console.error(`Unknown algorithm: ${props.algorithm}`);
        break;
      }
    }
  }

  return (
    <React.Fragment>
      <button onClick={sort} id="sortingButton" className="edit">
        Sort ⇄
      </button>
      <div className="tray" id="tray">
        <div className="screen" id="screen">
          {data.map(function (item, i) {
            return (
              <Bar length={data.length} id={i} key={i} value={item} i={i} />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tray;
