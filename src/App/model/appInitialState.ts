import { IAppModel, IBig } from "./IAppModel"

const blank: IBig = {
  bigNum: 7,
  smalls: {},
}

export const appInitialState: IAppModel = {
  bigs: {
    1: blank,
    2: blank,
    3: blank,
    4: blank,
    5: blank,
    6: blank,
    7: blank,
    8: blank,
    9: blank,
  },
}
