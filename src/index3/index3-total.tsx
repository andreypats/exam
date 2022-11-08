import React from 'react';

// 1


// 2


// 3


// 4


// 5


// 6


// 7


// 8
// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }
//
// function Counter() {
//     const [value, setValue] = XXX(changeCounter, 0)
//     const [isCounter, setIsCounter] = YYY(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }
//
//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{marginBottom: "20px"}}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{...btnStyles, backgroundColor: "red"}}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//                 </div>
//                 : <div style={{textAlign: "center"}}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{...btnStyles, backgroundColor: "green"}}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Counter/>, document.getElementById('root')
// );
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.
// useReducer useState  ????


// 9
// import React from 'react'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'
//
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
//
// const initState = {
//     students:
//         [
//             {id: 1, name: 'Bob', age: 23},
//             {id: 2, name: 'Alex', age: 22}
//         ] as Array<StudentType>
// }
// type AddStudentAT = {
//     type: 'ADD-STUDENT'
//     name: string
//     age: number
//     id: number
// }
//
// type InitialStateType = typeof initState
//
// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//     switch (action.type) {
//         case 'ADD-STUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age,
//                     id: action.id
//                 }]
//             }
//     }
//     return state
// }
//
// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList/>
// }
//
// ReactDOM.render(<div>
//         <XXX YYY={ZZZ}>
//             <App/>
//         </XXX>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
// Provider store appStore   ++++



// 10
// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {
//     students: [
//         {id: 1, name: 'Bob'},
//         {id: 2, name: 'Alex'},
//         {id: 3, name: 'Donald'},
//         {id: 4, name: 'Ann'},
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             XXX(YYY( ZZZ))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>
//
//     )
// }
//
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <StudentList/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// удалялся из списка? Напишите через пробел.
// dispatch RemoveStudentAC s.id  ++++








