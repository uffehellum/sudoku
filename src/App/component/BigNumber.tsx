import React from "react"
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux"
import { IAppModel, IBig } from "../model/IAppModel"
import { bignumActionCreator } from "../redux/bignumActionCreator"
import "./BigNumber.css"

interface IMyProps {
  box: number
}

interface IStateProps {
  big: IBig
}

interface IDispatchProps {
  update: (selected: number) => React.MouseEventHandler
}

type Props = IMyProps & IDispatchProps & IStateProps

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export class BigNumberInternal extends React.Component<Props> {
  clickable = (n: number) => (
    <a
      key={this.props.box * 10 + n}
      href={String(n)}
      onClick={this.props.update(n)}
    >
      {n}
    </a>
  )

  clickables = () => (
    <div className="clickables">{digits.map(n => this.clickable(n))}</div>
  )

  render() {
    console.log("render", this.props.big)
    return (
      <div className="big">
        <span className="bignum">
          {this.props.big.bigNum}
        </span>
        {this.clickables()}
      </div>
    )
  }
}

const mapDispatch: MapDispatchToProps<IDispatchProps, IMyProps> = (
  dispatch,
  props,
) => ({
  update: (selected) => (event) => {
    event.preventDefault()
    bignumActionCreator(dispatch)({ key: props.box, selected })
  },
})

interface IReduxState {
  app: IAppModel,
}

const mapState: MapStateToProps<IStateProps, IMyProps, IReduxState> = (
  {app},
  props,
) => {
    // console.log("map state", props.box, app.bigs)
    return ({
      big: app.bigs[props.box],
    })
  }

// tslint:disable-next-line:variable-name
export const BigNumber = connect(
  mapState,
  mapDispatch,
)(BigNumberInternal)
