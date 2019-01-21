import { ActionType } from "../../redux/ActionType"
import { ISelectBigPayload } from "./ISelectBigPayload"

export const bignumActionCreator = (dispatch: any) => (
  payload: ISelectBigPayload,
) => {
  console.log("click", payload)
  dispatch({
    payload,
    type: ActionType.AppBignum,
  })
}
