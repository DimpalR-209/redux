// What are these hooks?
// useAppDispatch: A typed version of useDispatch from Redux.

// useAppSelector: A typed version of useSelector that knows your app’s state shape (RootState).

// 🤔 Why do we use them?
// 🔥 With TypeScript, if you use the default useDispatch or useSelector, you don’t get intellisense or type safety. These custom hooks solve that!
import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import type { RootState,AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =useSelector