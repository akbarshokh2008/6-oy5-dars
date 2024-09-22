import "./App.css";
// Components
import Card from "./components/Card";
// useState
import { useState, useEffect } from "react";
// IMG
import Btn from "./assets/img/btn.svg";

function App() {
  const [item, setItem] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (item.trim() === "") return;

    let malum = {
      id: Date.now(),
      item,
    };
    let copied = [...users];
    copied.push(malum);
    setUsers(copied);

    let storageUsers = [];
    if (localStorage.getItem("users")) {
      storageUsers = JSON.parse(localStorage.getItem("users"));
    }
    storageUsers.push(malum);
    localStorage.setItem("users", JSON.stringify(storageUsers));
    setItem("");
  }

  function handleItem(event) {
    setItem(event.target.value);
  }
  useEffect(() => {
    let storegeItems = [];
    if (localStorage.getItem("users")) {
      storegeItems = JSON.parse(localStorage.getItem("users"));
    }
    setUsers(storegeItems);
  }, []);
  function deleteItem(id) {
    let copiedDel = [...users];
    copiedDel = copiedDel.filter(function (value) {
      return value.id != id;
    });
    setUsers(copiedDel);
    localStorage.setItem("users", JSON.stringify(copiedDel));
  }
  return (
    <div className=" w-1/3 mx-auto mt-48">
      <form className="   flex gap-3 m">
        <input
          onChange={handleItem}
          value={item}
          className="w-[100%] border-[1px] border-[#3e1671] rounded pl-4 bg-inherit text-white"
          type="text"
          placeholder="Add a new task..."
          required
        />
        <button onClick={handleSubmit}>
          <img src={Btn} alt="" />
        </button>
      </form>
      <div className="wrapper flex flex-col gap-4">
        {users.length > 0 && (
          <h2 className="text-white mt-16">Tasks to do - {users.length}</h2>
        )}

        {users.length > 0 ? (
          users.map((user) => (
            <Card deleteItem={deleteItem} key={user.id} user={user} />
          ))
        ) : (
          <p className="text-white mt-16`">Malumotlar yuq</p>
        )}
      </div>
    </div>
  );
}

export default App;
