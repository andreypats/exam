import React from 'react';

// 1
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type TodoType = {
//     id: number
//     tile: string
//     complete: boolean
//     userId: number
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const todosAPI = {
//     getTodos() {
//         return instance.get<TodoType[]>('todos?_limit=15')
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [todos, setTodos] = useState<Array<TodoType>>([])
//
//     useEffect(() => {
//         todosAPI.getTodos().then((res) => setTodos(res.data))
//     }, [])
//
//
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             {
//                 todos.map((t) => {
//                     return (
//                         <div style={t.complete ? {color: 'grey'} : {}} key={t.id}>
//                             <input type="checkbox" checked={t.complete}/>
//                             <b>Описание</b>: {t.tile}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// При написании типизации по невнимательности было допущено несколько ошибок.
// Напишите через пробел правильные свойства в TodoType, в которых была допущена ошибка.
// Debugger / network / документация вам в помощь

// Пример ответа: id status isDone

// title completed   ++++


// 2
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type PostType = {
//     body: string
//     id: number
//     title: string
//     userId: number
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const postsAPI = {
//     getPosts() {
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для получения постов
//         return Promise.resolve()
//     },
// }
//
//
// // App
// export const App = () => {
//
//     const [posts, setPosts] = useState<PostType[]>([])
//
//     useEffect(() => {
//         postsAPI.getPosts()
//             .then((res: any) => {
//                 setPosts(res.data)
//             })
//     }, [])
//
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {
//                 posts.length
//                     ? posts.map(p => {
//                         return <div key={p.id}><b>title</b>: {p.title}</div>
//                     })
//                     : <h2>Постов нету 😥</h2>
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Напишите запрос на сервер для получения всех постов
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: return instance.put('todolists/1')

// return instance.get('posts')  ++++


// 3
// import axios from 'axios'
// import React, { ChangeEvent, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type CommentType = {
//     postId: number
//     id: number
//     name: string
//     email: string
//     body: string
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>('comments?_limit=10')
//     },
//     createComment(body: string) {
//         const payload = {
//             body,
//             email: 'test@gmail.com',
//             name: 'Name',
//             postId: Math.random()
//         }
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         return Promise.resolve()
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [comments, setComments] = useState<CommentType[]>([])
//     const [commentBody, setCommentBody] = useState('')
//
//     useEffect(() => {
//         commentsAPI.getComments()
//             .then((res) => {
//                 setComments(res.data)
//             })
//     }, [])
//
//     const createPostHandler = () => {
//         commentsAPI.createComment(commentBody)
//             .then((res: any) => {
//                 const newComment = res.data
//                 setComments([newComment, ...comments])
//                 setCommentBody('')
//             })
//     };
//
//     const createTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setCommentBody(e.currentTarget.value)
//     };
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//
//             <div style={{marginBottom: '15px'}}>
//                 <input style={{width: '300px'}}
//                        type="text"
//                        value={commentBody}
//                        placeholder={'Введите новый комментрарий'}
//                        onChange={createTitleHandler}
//                 />
//                 <button style={{marginLeft: '15px'}}
//                         onClick={() => createPostHandler()}>
//                     Добавить новый комментарий
//                 </button>
//             </div>
//
//             {
//                 comments.map(c => {
//                     return <div key={c.id}><b>Comment</b>: {c.body} </div>
//                 })
//             }
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: return Promise.resolve<PostType[]>(data)

// return instance.post<CommentType[]>('comments', {body: body})  ------
// return instance.post<CommentType[]>('comments', {body: payload.body})


// 4
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type PostType = {
//     body: string
//     id: number
//     title: string
//     userId: number
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts')
//     },
//     deletePost(id: number) {
//         return axios.delete(`posts/${id}`)
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [posts, setPosts] = useState<PostType[]>([])
//
//     useEffect(() => {
//         postsAPI.getPosts()
//             .then((res) => {
//                 setPosts(res.data)
//             })
//     }, [])
//
//     const deletePostHandler = (id: number) => {
//         postsAPI.deletePost(id)
//             .then((res) => {
//                 const newPostsArr = posts.filter(p => p.id !== id)
//                 setPosts(newPostsArr)
//             })
//     };
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map(p => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button style={{marginLeft: '15px'}}
//                                 onClick={() => deletePostHandler(p.id)}>
//                             x
//                         </button>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Почему не удаляется post при нажатии на кнопку удаления (х) ?
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа
// Пример ответа: return instance.put('posts/1')

// return instance.delete(`posts/${id}`)   ++++


// 5
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type PhotoType = {
//     albumId: number
//     id: number
//     title: string
//     url: string
//     thumbnailUrl: string
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const photosAPI = {
//     getPhoto() {
//         return instance.get<PhotoType>('photos/1')
//     },
//     updatePhotoTitle(payload: PhotoType) {
//         return instance.put<PhotoType>(`photos/${payload.id}`, {payload})
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [photo, setPhoto] = useState<PhotoType | null>(null)
//
//     useEffect(() => {
//         photosAPI.getPhoto()
//             .then((res) => {
//                 setPhoto(res.data)
//             })
//     }, [])
//
//     const updatePhotoHandler = () => {
//         const payload = {
//             title: 'Обновление произошло успешно 🚀',
//             albumId: 1,
//             id: 1,
//             url: "https://via.placeholder.com/600/92c952",
//             thumbnailUrl: "https://via.placeholder.com/150/92c952"
//         }
//         photosAPI.updatePhotoTitle(payload)
//             .then((res) => {
//                 setPhoto(res.data)
//             })
//     };
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <div>
//                 <div style={{marginBottom: '15px'}}>
//                     <b>title</b>: {photo?.title}
//                     <button style={{marginLeft: '15px'}}
//                             onClick={updatePhotoHandler}>
//                         Обновить описание к фотографии
//                     </button>
//                 </div>
//                 <div><img src={photo?.url} alt=""/></div>
//             </div>
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// При нажатии на кнопку "Обновить описание к фотографии" title должен обновиться
// на надпись "Обновление произошло успешно 🚀", но из-за невнимательности была допущена ошибка
//
// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: photosAPI.updatePhotoTitle(id, title)

// return instance.put<PhotoType>(`photos/${payload.id}`, {title: payload.title})  -----


// 6
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
//
// // Types
// type PhotoType = {
//     albumId: number
//     id: number
//     title: string
//     url: string
//     thumbnailUrl: string
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const photosAPI = {
//     getPhotos(page: number) {
//         return instance.get<PhotoType[]>(`photos?_limit=2?_page${page}`)
//     }
// }
//
//
// // App
//
// const buttons = [
//     {id: 1, title: '1'},
//     {id: 2, title: '2'},
//     {id: 3, title: '3'},
// ]
//
// export const App = () => {
//
//     const [photos, setPhotos] = useState<PhotoType[]>([])
//     const [currentPage, setCurrentPage] = useState(1)
//
//     useEffect(() => {
//         photosAPI.getPhotos(currentPage)
//             .then((res) => {
//                 setPhotos(res.data)
//             })
//     }, [currentPage])
//
//     const setPageHandler = (page: number) => {
//         setCurrentPage(page)
//     };
//
//     return (
//         <>
//             <h1>📸 Список фоток</h1>
//             {/* Photos */}
//             {
//                 photos.map(p => {
//                     return <div style={{marginBottom: '25px'}} key={p.id}>
//                         <b>title</b>: {p.title}
//                         <div><img src={p.thumbnailUrl} alt=""/></div>
//                     </div>
//                 })
//             }
//
//             {/* Buttons */}
//             {
//                 buttons.map(b => {
//                     return (
//                         <button key={b.id}
//                                 style={b.id === currentPage ? {backgroundColor: 'lightblue'} : {}}
//                                 onClick={() => setPageHandler(b.id)}>
//                             {b.title}
//                         </button>
//                     )
//                 })
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Пагинация не работает.
// При переходе по страницам, контент (описание и изображение фоток) должен меняться.
// Подсказка. В одной строке кода допущено 2 ошибки.
// Задача: найти эти ошибки, и исправленную версию строки написать в качестве ответа.
// Пример ответа: const [currentPage, setCurrentPage] = useState(page)

// return instance.get<PhotoType[]>(`photos?_limit=2&_page=${page}`)   +++++


// 7
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type TodoType = {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }
//
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const todosAPI = {
//     getTodo(todoId: number) {
//         return instance.get<TodoType>(`todos/ ${todoId}`)
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [todo, setTodo] = useState<TodoType | null>(null)
//     const [error, setError] = useState<string>('')
//
//     useEffect(() => {
//         const todoId = 4
//         todosAPI.getTodo(todoId)
//             .then((res: any) => setTodo(res.data))
//             .catch(e => {
//                 setError('Ошибка 😰. Анализируй network 😉')
//             })
//     }, [])
//
//
//     return (
//         <>
//             <h2>✅ Тудулист</h2>
//             {
//                 !!todo
//                     ? <div>
//                         <div style={todo?.completed ? {color: 'grey'} : {}} key={todo?.id}>
//                             <input type="checkbox" checked={todo?.completed}/>
//                             <b>Описание</b>: {todo?.title}
//                         </div>
//                         <h2>Так держать. Ты справился 🚀</h2>
//                     </div>
//                     : <h2 style={{ color: 'red' }}>{error}</h2>
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)
//
// Описание:
// Студент по неопытности допустил одну маленькую ошибку, но из-за нее он не может вывести на экран тудулист.
// Найдите ошибку и вставьте исправленную версию строки кода в качестве ответа
// Пример ответа:  'https://jsonplaceholder.typicode.com/todos'
//
// P.S. Эта ошибка из реальной жизни, студенты часто ошибаются и не могут понять в чем дело.

// return instance.get<TodoType>(`todos/${todoId}`)  ++++


// 8
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // TYPES
// type UserType = {
//     avatar: string
//     email: string
//     first_name: string
//     id: 1
//     last_name: string
// }
//
// type ColorType = {
//     color: string
//     id: number
//     name: string
//     pantone_value: string
//     year: number
// }
//
// type UsersResponseType = {
//     total: number
//     total_pages: number
//     page: number
//     per_page: number
//     support: {
//         url: string
//         text: string
//     }
//     url: string
//     data: UserType[]
// }
//
// type ColorsResponseType = {
//     total: number
//     total_pages: number
//     page: number
//     per_page: number
//     support: {
//         url: string
//         text: string
//     }
//     url: string
//     data: ColorType[]
// }
//
// type CommonResponseType = {
//     // your code
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://reqres.in/api/'
// })
//
// const reqresAPI = {
//     getUsers() {
//         return instance.get<UsersResponseType>('users')
//     },
//     getColors() {
//         return instance.get<ColorsResponseType>('colors')
//     }
// }
//
//
// // App
// const App = () => {
//     return (
//         <>
//             <h1>Reqres API</h1>
//             <Users/>
//             <Colors/>
//         </>
//     )
// }
//
// const Users = () => {
//
//     const [users, setUsers] = useState<UserType[]>([])
//
//     useEffect(() => {
//         reqresAPI.getUsers()
//             .then((res) => setUsers(res.data.data))
//     }, [])
//
//     return (
//         <div>
//             <h2>Users</h2>
//             <div style={{display: 'flex'}}>
//                 {
//                     users.map(u => {
//                         return (
//                             <div key={u.id} style={{marginRight: '25px'}}>
//                                 <p>{u.first_name}</p>
//                                 <img src={u.avatar} alt=""/>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }
//
// const Colors = () => {
//
//     const [colors, setColors] = useState<ColorType[]>([])
//
//     useEffect(() => {
//         reqresAPI.getColors()
//             .then((res) => setColors(res.data.data))
//     }, [])
//
//     return (
//         <div>
//             <h2>Colors</h2>
//             <div style={{display: 'flex'}}>
//                 {
//                     colors.map(c => {
//                         return (
//                             <div key={c.id} style={{marginRight: '25px'}}>
//                                 <p>{c.name}</p>
//                                 <div style={{backgroundColor: c.color, width: '128px', height: '30px'}}>
//                                     <b>{c.color}</b>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// При запуске проекта на экране вы увидите 2 списка: Users и Colors.
// С ними все хорошо, но обратите внимание на типизацию ответов с сервера UsersResponseType и ColorsResponseType.
// Дублирование типов на лицо.
// Ваша задача написать дженериковый тип CommonResponseType и заменить им дублирующие типы.
// Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты :) )
// Параметр тип назовите буквой T

// В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponseType

// type CommonResponseType = {
//     total: number
//     total_pages: number
//     page: number
//     per_page: number
//     support: {
//         url: string
//         text: string
//     }
//     url: string
//     data: CommonType<T>
// }

// Ответ  ++++
// type CommonResponseType<T> = {
//     total: number
//     total_pages: number
//     page: number
//     per_page: number
//     support: {
//         url: string
//         text: string
//     }
//     url: string
//     data: T
// }
