import React from 'react';

// 1
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

//Какой тип должен быть вместо XXX?
// 'TRACK-URL-CHANGED'


// 2
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-STATUS-CHANGED':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
//
// const newState = playerReducer(state, XXX)
// console.log(newState.status === 'Paused')

//Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true
// changeTrackPlayStatusAC   ----
// changeTrackPlayStatusAC ('Paused')   ????


// 3
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 XXX
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
// volume: action.volumeLevel   +++++


// 4
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-LIKED':
//             return {
//                 ...state,
//                 [XXX]: {
//                     ...state[XXX],
//                     likesCount: state[XXX].likesCount + 1
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})
//
//
// const state = {
//     12: {id: 12, likesCount: 10},
//     14: {id: 14, likesCount: 2},
//     100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// ❗ Захардкодженные значения использовать запрещено
// action.trackId   ++++

// 5
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return XXX
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)

// Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?
// {...state, [action.trackId]: {id: action.trackId, likesCount: 0}}   -----
// [...state, {id: action.trackId, likesCount: 0}]   ????


// 6
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => XXX)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)


// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
// track.id !== action.trackId   ++++


// 7
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case YYY:
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case ZZZ:
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// // перемотатьНаНачало:
// const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})

// Какие типы должны быть вместо XXX, YYY и ZZZ?
// Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'
// 'TRACK-URL-CHANGED' 'TRACK-MUTED' 'TRACK-REWOUND-TO-START'   ++++
