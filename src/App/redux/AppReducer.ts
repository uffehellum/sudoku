import { ActionType } from "../../redux/ActionType"
import { IAction } from "../../redux/IAction"
import { appInitialState } from "../model/appInitialState"
import { IBig, IBigs } from "../model/IAppModel"
import { ISelectBigPayload } from "./ISelectBigPayload"

export function reduceBig(old: IBig, n: number): IBig {
  const x = { ...old }
  x.bigNum = x.bigNum === n ? undefined : n
  return x
}

export function reduceBigs(old: IBigs, k: number, v: number): IBigs {
  const x = { ...old }
  x[k] = reduceBig(old[k], v)
  return x
}

export function AppReducer(state = appInitialState, action: IAction) {
  switch (action.type) {
    case ActionType.AppBignum:
      const { key, selected } = action.payload as ISelectBigPayload
      return {
        ...state,
        bigs: reduceBigs(state.bigs, key, selected),
      }
    default:
      return state
  }
}
