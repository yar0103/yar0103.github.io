/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "쇼핑몰",
    "애플 스토어",
    "사이드 프로젝트",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">A Rins's Portfolio List</h4>
      </div>

      {글제목.map((props, i) => {
        return (
          <div className="list">
            <h2
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {i + 1} 번째 포트폴리오
            </h2>

            <h4>
              {props}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <p>상세내용</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {modal == false ? null : (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          setModal={setModal}
        />
      )}
    </div>
  );
}

function Modal(props, i) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자 코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy.splice(i, 1);
          props.글제목변경(copy);
          props.setModal(false);
        }}
      >
        글삭제
      </button>
    </div>
  );
}

export default App;
