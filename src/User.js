import { React, useEffect, useState, useId } from "react";
import { db } from "./fbase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function User() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newCustId, setNewCustId] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [newTheme, setnewTheme] = useState(0);

  const uniqueId = useId(); // useId 고유 아이디 만들어주는 것

  // Read
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  // Create
  const createUsers = async () => {
    await addDoc(usersCollectionRef, {
      cust_id: newCustId,
      nickname: newNickname,
      theme: newTheme,
    });
  };

  // 데이터 보여주는 방법 + Read
  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h3>cust_id: {value.cust_id} </h3>
      <h3>nickname: {value.nickname}</h3>
      <h3>theme: {value.theme}</h3>

      <button
        onClick={() => {
          updateUser(value.id, value.theme);
        }}
      >
        Increase theme
      </button>

      <button
        onClick={() => {
          deleteUser(value.id);
        }}
      >
        Delete User
      </button>
    </div>
  ));

  const updateUser = async (id, theme) => {
    // 내가 업데이트 하고자 하는 db의 컬렉션의 id를 뒤지면서 내가 수정하고자 하는 id랑 같은 id값을 가진 데이터를 찾는다
    const userDoc = doc(db, "users", id);
    // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할지 준비,, 중요한점이 db에는 문자열로 저장되어있다. 그래서 createUsers()함수안에서 age를 생성할때 숫자열로 형변환 해줘야한다
    const newField = { theme: theme + 1 };
    // updateDoc()을 이용해서 업데이트
    await updateDoc(userDoc, newField);
  };

  const deleteUser = async (id) => {
    // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const userDoc = doc(db, "users", id);
    // deleteDoc을 이용해서 삭제
    await deleteDoc(userDoc);
  };

  return (
    <div className="User">
      {showUsers}
      <input
        type="text"
        placeholder="cust_id..."
        onChange={(event) => {
          setNewCustId(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="nickname..."
        onChange={(event) => {
          setNewNickname(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="theme..."
        onChange={(event) => {
          setnewTheme(event.target.value);
        }}
      />
      <button onClick={createUsers}>Create User</button>
    </div>
  );
}

export default User;
