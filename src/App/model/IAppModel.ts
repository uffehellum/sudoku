export interface ISelection {
  [n: number]: number | undefined
}

export interface IBig {
  bigNum: number | undefined
  smalls: ISelection
}

export interface IBigs {
  [n: number]: IBig
}

export interface IAppModel {
  bigs: IBigs
}
