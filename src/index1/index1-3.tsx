import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


// 1.
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {
//                     users.map(u => <User xxx={u.id}
//                                          id={u.id}
//                                          name={u.name}
//                                          age={u.age}
//                         />
//                     )
//                 }
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал оптимально?
// key    ++++


// 2
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User key={u.id} {...u} />) }
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//  setUsers------
//  u   ++++


// 3
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     // const olderThen25Users = users.xxx(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/!*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*!/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?
// filter ++++



// 4.
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список пользователей старше 25 лет:
//     // const getOlderThen25Users = (u: xxx) => u.age > 25
//     // const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/!*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*!/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Что надо написать вместо xxx, чтобы код работал?
// UserType   ++++


// 5.
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список ользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(olderThen25Users)
// true  ++++



// 6.
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         // setUsers(xxx)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?
// filteredUsers    +++++


// 7.
// function Button() {
//     return <button
//         onClick={xxx}
//     >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// Что надо написать вместо ххх,
// что бы на странице появился пустой alert при клике по кнопке?
// ()=>{alert()}    ????


// 8.
// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // console.log((typeof e) === ххх)
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
//
// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?
// 'object'   +++++


// 9.
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const [tagName, setTagName] = useState<string>()
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // setTagName(e.xxx.tagName)
//     }
//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler} >
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
//
// // Что надо написать вместо ххх, что бы на странице появился текст BUTTON?
// currentTarget   +++


// 10.
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: any) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={()=>props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         setUsers(users.filter(u => u.id !== userID))
//     }
//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// // Какой тип было бы указать правильнее?
// number   ++++

