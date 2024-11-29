import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [shape, setShape] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [fruits, setFruits] = useState([]);
  const [colors, setColors] = useState("");
  const [email, setEmail] = useState("");
  const [inValid, setInValid] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  function handleShape() {
    switch (Number(number)) {
      case 3:
        setShape("Uchburchak");
        break;
      case 4:
        setShape("To'rtburchak");
        break;
      case 5:
        setShape("Beshburchak");
        break;
      default:
        setShape("Bunday shakl mavjud emas");
        break;
    }
  }
  function handlePassword() {
    if (password1 === password2) {
      setCheckPassword("Parol mos keldi");
    } else {
      setCheckPassword("Parol mos kelmadi");
    }
  }
  function handleFruits(event) {
    let copied = [...fruits];
    if (event.target.checked) {
      copied.push(event.target.value);
    } else {
      copied = copied.filter((value) => {
        return value != event.target.value;
      });
    }
    setFruits(copied);
  }
  function handleColors() {
    setColors(event.target.value);
  }
  function handleEmailValidate() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
    if (regex.test(email)) {
      setInValid("Email to'g'ri");
    } else {
      setInValid("Email noto'g'ri formatda");
    }
  }
  function handleChangeWord() {
    const temp = word1;
    setWord1(word2);
    setWord2(temp);
  }
  function handleTodo() {
    let data = {
      task: task,
      id: Date.now(),
    };

    let copied = [...todo];
    copied.push(data);
    setTodo(copied);
  }
  function handleDelete(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <div className="wrapper1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleShape();
          }}
        >
          <h2>1. Shaklni aniqlash</h2>
          <input
            value={number}
            type="number"
            placeholder="Enter Number..."
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
          <p>{shape}</p>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePassword();
          }}
        >
          <h2>2. Parol tekshirish formasi </h2>
          <input
            value={password1}
            type="password"
            placeholder="Enter password..."
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
          <input
            value={password2}
            type="password"
            placeholder="Enter password..."
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
          <p>{checkPassword}</p>
        </form>
        <form>
          <h2>3. Checkbox ro’yxat tuzish</h2>
          <label htmlFor="olma">
            <input
              value="Olma"
              type="checkbox"
              onChange={handleFruits}
              id="olma"
            />
            Olma
          </label>
          <label htmlFor="apelsin">
            <input
              value="Apelsin"
              type="checkbox"
              onChange={handleFruits}
              id="apelsin"
            />
            Apelsin
          </label>
          <label htmlFor="banan">
            <input
              value="Banan"
              type="checkbox"
              onChange={handleFruits}
              id="banan"
            />
            Banan
          </label>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </form>
        <form>
          <h2>4. tanlovi bo’yicha rang o’zgartirish</h2>
          <label htmlFor="qizil">
            <input
              value="Qizil"
              type="radio"
              name="color"
              id="qizil"
              onChange={handleColors}
            />
            Qizil
          </label>
          <label htmlFor="yashil">
            <input
              value="Yashil"
              type="radio"
              name="color"
              id="yashil"
              onChange={handleColors}
            />
            Yashil
          </label>
          <label htmlFor="kok">
            <input
              value="Ko'k"
              type="radio"
              name="color"
              id="kok"
              onChange={handleColors}
            />
            Kok
          </label>
          {colors && (
            <div
              className="bg-block"
              style={{
                backgroundColor:
                  colors === "Qizil"
                    ? "red"
                    : colors === "Yashil"
                    ? "green"
                    : colors === "Ko'k"
                    ? "blue"
                    : "transparent",
              }}
            ></div>
          )}
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailValidate();
          }}
        >
          <h2>5. Togri email kiritish tekshiruvi</h2>
          <input
            value={email}
            type="text"
            placeholder="Enter Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
          <p>{inValid}</p>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>6. Ikkita input qiymatini almashtirish</h2>
          <input
            value={word1}
            type="text"
            placeholder="Enter text ..."
            onChange={(e) => {
              setWord1(e.target.value);
            }}
          />
          <input
            value={word2}
            type="text"
            placeholder="Enter text..."
            onChange={(e) => {
              setWord2(e.target.value);
            }}
          />
          <button type="submit" onClick={handleChangeWord}>
            Qiymatlarni almashtirish
          </button>
          <p>{word1}</p>
          <p>{word2}</p>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>7. To-do ro'yxat yaratish</h2>
          <input
            value={task}
            type="text"
            placeholder="Enter task..."
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button type="submit" onClick={handleTodo}>
            Submit
          </button>
          {todo.length > 0 &&
            todo.map(function (value, index) {
              return (
                <div key={index} className="task-wrap">
                  <p>{value.task}</p>
                  <button onClick={() => handleDelete(value.id)}>Delete</button>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}

export default App;
