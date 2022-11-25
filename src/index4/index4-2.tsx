import React from 'react';

// 1
// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
//
// const thunkCreator = () => (XXX: any, YYY: any) => {
//     // 1. Server requests
//     // 2. Dispatch actions
// }
//
//
// // App
// const App = () => {
//     return (
//         <>
//             <h1>В этом задании смотреть на экран не нужно. Ничего не изменится 😈</h1>
//             <p>Читайте описание к заданию</p>
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Вместо XXX и YYY через пробел напишите параметры которые приходят в санку.
// Пример ответа: useCallback state
// dispatch getState  +++++


// 2
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import axios from 'axios';
//
// // Types
// type TodoType = {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const todosAPI = {
//     getTodos() {
//         return instance.get<TodoType[]>('todos?_limit=15')
//     },
//     changeTodoStatus(id: number, completed: boolean) {
//         return instance.patch(`todos/${id}`, {completed})
//     }
// }
//
//
// // Reducer
// const initState = [] as TodoType[]
//
// type InitStateType = typeof initState
//
// const todosReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'TODOS/GET-TODOS':
//             return action.todos
//
//         case 'TODOS/CHANGE-TODO-STATUS':
//             return state.map((t) => {
//                 if (t.id === action.todo.id) {
//                     return {...t, completed: action.todo.completed}
//                 } else {
//                     return t
//                 }
//             })
//
//         default:
//             return state
//     }
// }
//
// const getTodosAC = (todos: TodoType[]) => ({type: 'TODOS/GET-TODOS', todos} as const)
// const changeTodoStatusAC = (todo: TodoType) => ({type: 'TODOS/CHANGE-TODO-STATUS', todo} as const)
// type ActionsType = ReturnType<typeof getTodosAC> | ReturnType<typeof changeTodoStatusAC>
//
// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//     todosAPI.getTodos()
//         .then((res) => {
//             dispatch(getTodosAC(res.data))
//         })
// }
//
// const changeTodoStatusTC = (id: number, completed: boolean): AppThunk => (dispatch) => {
//     todosAPI.changeTodoStatus(id, completed)
//         .then((res) => {
//             dispatch(changeTodoStatusAC(res.data))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     todos: todosReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//     const todos = useAppSelector(state => state.todos)
//
//     useEffect(() => {
//         getPostsTC()
//     }, [])
//
//     const changeStatusHandler = (id: number, completed: boolean) => {
//         dispatch(changeTodoStatusTC(id, completed))
//     };
//
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             {
//                 todos.length ?
//
//                     todos.map((t) => {
//                         return (
//                             <div style={t.completed ? {color: 'grey'} : {}} key={t.id}>
//                                 <input type="checkbox"
//                                        checked={t.completed}
//                                        onChange={() => changeStatusHandler(t.id, !t.completed)}
//                                 />
//                                 <b>Описание</b>: {t.title}
//                             </div>
//                         )
//                     })
//                     : <h2>Тудулистов нету 😥</h2>
//             }
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При загрузке приложения вы должны увидеть список тудулистов,
// но из-за невнимательности была допущена ошибка.
// Найдите и исправьте ошибку.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: type InitStateType = typeof initState
// dispatch(getPostsTC())  ?????


// 3
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
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
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const photosAPI = {
//     getPhotos() {
//         return instance.get<PhotoType[]>('photos?_limit=3')
//     },
// }
//
//
// // Reducer
// const initState = [] as PhotoType[]
//
// type InitStateType = typeof initState
//
// const photoReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'PHOTO/GET-PHOTOS':
//             return action.photos
//
//         default:
//             return state
//     }
// }
//
// const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
// type ActionsType = ReturnType<typeof getPhotosAC>
//
// const getPhotosTC = (): AppThunk => (dispatch) => {
//     photosAPI.getPhotos()
//         .then((res) => {
//             dispatch(getPhotosAC(res.data))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     photo: photoReducer,
// })
//
// const store = createStore(rootReducer)
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // Components
// const App = () => {
//     const dispatch = useAppDispatch()
//     const photos = useAppSelector(state => state.photo)
//
//     const getPhotosHandler = () => {
//         dispatch(getPhotosTC())
//     };
//
//     return (
//         <>
//             <h1>📸 Фото</h1>
//             {
//                 photos.map(p => {
//                     return <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <div><img src={p.thumbnailUrl} alt=""/></div>
//                     </div>
//                 })
//             }
//
//             <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть список фотографий,
// но ничего не подгружается.
// Найдите и исправьте ошибку.
// Debugger / network / console.log вам в помощь.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: type InitStateType = typeof initState
// const store = createStore(rootReducer, applyMiddleware(thunk))  +++++


// 4
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
//
// // Types
// type PostType = {
//     body: string
//     id: number
//     title: string
//     userId: number
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts?_limit=15')
//     },
// }
//
//
// // Reducer
// const initState = [] as PostType[]
//
// type InitStateType = typeof initState
//
// const postsReducer = (state: InitStateType = initState, action: GetPostsActionType): InitStateType => {
//     switch (action.type) {
//         case 'POSTS/GET-POSTS':
//             return action.posts
//     }
//     return state
// }
//
// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// type GetPostsActionType = ReturnType<typeof getPostsAC>
//
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts()
//         .then((res) => {
//             dispatch(getPostsAC(res.data))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, GetPostsActionType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, GetPostsActionType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//     const posts = useAppSelector(state => state.posts)
//
//     useEffect(() => {
//         dispatch(getPostsTC)
//     }, [])
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
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При загрузке приложения вы должны увидеть список постов,
// но из-за невнимательности была допущена ошибка.

// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: type InitStateType = typeof initState

// P.S. Эта ошибка из реальной жизни, студенты так часто ошибаются и не могут понять в чем дело.
// dispatch(getPostsTC())  +++++


// 5
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
//
//
// // Types
// type PostType = {
//     body: string
//     id: number
//     title: string
//     userId: number
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts?_limit=10')
//     },
//     createPost() {
//         const payload = {
//             body: 'new post body',
//             title: 'new post title',
//             userId: 1
//         }
//         return instance.post('posts', payload)
//     }
// }
//
// // Reducer
// const initState = [] as PostType[]
//
// type InitStateType = typeof initState
//
// const postsReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'POSTS/GET-POSTS':
//             return action.posts
//
//         case 'POSTS/CREATE-POST':
//             return [action.post, ...state]
//
//         default:
//             return state
//     }
// }
//
//
// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// const createPostAC = (post: PostType) => ({type: 'POSTS/CREATE-POST', post} as const)
//
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof createPostAC>
//
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts()
//         .then((res) => {
//             dispatch(getPostsAC(res.data))
//         })
// }
//
// const addPostTC = (): AppThunk => (dispatch) => {
//     postsAPI.createPost()
//         .then((res) => {
//             dispatch(createPostAC(res.data))
//         })
// }
//
// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//     const posts = useAppSelector(state => state.posts)
//
//     useEffect(() => {
//         dispatch(getPostsTC())
//     }, [])
//
//     const addPostHandler = () => {
//         alert('Пост добавить не получилось. Напишите код самостоятельно 🚀')
//     };
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             <button style={{marginBottom: '10px'}} onClick={addPostHandler}>Добавить пост</button>
//             {
//                 posts.map(p => {
//                     return <div key={p.id}><b>title</b>: {p.title}</div>
//                 })
//             }
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Добавить пост" пост должен добавиться,
// но появляется alert.
// Вместо alerta напишите код, чтобы пост добавлялся.
// Правильную версию строки напишите в качестве ответа.
// Пример ответа: return instance.get<PostType[]>('posts?_limit=10')
// dispatch(addPostTC())  +++++


// 6
// import axios from 'axios'
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
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
//     }
// }
//
// // Reducer
// const initState = [] as CommentType[]
//
// type InitStateType = typeof initState
//
// const commentsReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'COMMENTS/GET-COMMENTS':
//             return action.comments
//         default:
//             return state
//     }
// }
//
// const getCommentsAC = (comments: CommentType[]) => ({type: 'COMMENTS/GET-COMMENTS', comments} as const)
// type ActionsType = ReturnType<typeof getCommentsAC>
//
// const getCommentsTC = (): ThunkAction<any, any, any, any> => (dispatch) => {
//     commentsAPI.getComments()
//         .then((res) => {
//             dispatch(getCommentsAC(res.data))
//         })
// }
//
//
// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// // App
// export const App = () => {
//
//     const comments = useAppSelector(state => state.comments)
//     const dispatch = useAppDispatch()
//
//     useEffect(() => {
//         dispatch(getCommentsTC())
//     }, [])
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {
//                 comments.map(c => {
//                     return <div key={c.id}><b>Comment</b>: {c.body} </div>
//                 })
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkAction<any, any, any, any>.
// Что нужно написать вместо any, any, any, any чтобы правильно типизировать thunk creator?
// Ответ дайте через пробел
// Пример ответа: unknown status isDone void
// CommentType, InitStateType, CommentType[], ActionsType   ------
// void, RootState, unknown, ActionsType  ????


// 7
// import axios from 'axios'
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import thunk, { ThunkDispatch } from 'redux-thunk';
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
//     }
// }
//
// // Reducer
// const initState = [] as CommentType[]
//
// type InitStateType = typeof initState
//
// const commentsReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'COMMENTS/GET-COMMENTS':
//             return action.comments
//     }
//     return state
// }
//
// const getCommentsAC = (comments: CommentType[]) => ({type: 'COMMENTS/GET-COMMENTS', comments} as const)
// type ActionsType = ReturnType<typeof getCommentsAC>
//
// const getCommentsTC = () => (dispatch: DispatchType) => {
//     commentsAPI.getComments()
//         .then((res) => {
//             dispatch(getCommentsAC(res.data))
//         })
// }
//
//
// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof rootReducer>
// type DispatchType = ThunkDispatch<any, any, any>
// const useAppDispatch = () => useDispatch<DispatchType>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// // App
// export const App = () => {
//
//     const comments = useAppSelector(state => state.comments)
//     const dispatch = useAppDispatch()
//
//     useEffect(() => {
//         dispatch(getCommentsTC())
//     }, [])
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {
//                 comments.map(c => {
//                     return <div key={c.id}><b>Comment</b>: {c.body} </div>
//                 })
//             }
//         </>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkDispatch<any, any, any>.
// Что нужно написать вместо any, any, any чтобы правильно типизировать dispatch ?
// Ответ дайте через пробел
// Пример ответа: unknown status isDone
// InitStateType, CommentType[], ActionsType  -----
// RootState, CommentType[], ActionsType  ?????


// 8
// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
//
// // Types
// type PostType = {
//     body: string
//     id: number
//     title: string
//     userId: number
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts?_limit=15')
//     },
//     updatePostTitle(post: PostType) {
//         return instance.put<PostType>(`posts/${post.id}`, post)
//     }
// }
//
//
// // Reducer
// const initState = [] as PostType[]
//
// type InitStateType = typeof initState
//
// const postsReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case 'POSTS/GET-POSTS':
//             return action.posts
//
//         case 'POSTS/UPDATE-POST-TITLE':
//             return state.map((p) => {
//                 if (p.id === action.post.id) {
//                     return {...p, title: action.post.title}
//                 } else {
//                     return p
//                 }
//             })
//
//         default:
//             return state
//     }
// }
//
// const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
// const updatePostTitleAC = (post: PostType) => ({type: 'POSTS/UPDATE-POST-TITLE', post} as const)
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>
//
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts()
//         .then((res) => {
//             dispatch(getPostsAC(res.data))
//         })
// }
//
// const updatePostTC = (postId: number): AppThunk => (dispatch, getState: any) => {
//     try {
//         const currentPost = getState().find((p: PostType) => p.id === postId)
//
//         if (currentPost) {
//             const payload = {...currentPost, title: 'Летим 🚀'}
//             postsAPI.updatePostTitle(payload)
//                 .then((res) => {
//                     dispatch(updatePostTitleAC(res.data))
//                 })
//         }
//     } catch (e) {
//         alert('Обновить пост не удалось 😢')
//     }
//
// }
//
// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// })
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// // App
// const App = () => {
//     const dispatch = useAppDispatch()
//     const posts = useAppSelector(state => state.posts)
//
//     useEffect(() => {
//         dispatch(getPostsTC())
//     }, [])
//
//     const updatePostHandler = (postId: number) => {
//         dispatch(updatePostTC(postId))
//     }
//
//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {
//                 posts.map(p => {
//                     return <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
//                     </div>
//                 })
//             }
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// Попробуйте обновить пост и вы увидите alert с ошибкой.
// Debugger / network / console.log вам в помощь
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа.
// Пример ответа: const payload = {...currentPost, tile: 'Летим 🚀'}
// Подсказка. Избавьтесь от всех any и решение придет само собой 😉
// const currentPost = getState().posts.find((p: PostType) => p.id === postId)  ?????

