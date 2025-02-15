import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">Trader walutowy</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && <button type="button" className="topbar__back" onClick={this.toggle} />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Wykres liniowy" icon="list" path="/pages/lineChart" />
            <TopbarMenuLink title="Wykres obszarowy" icon="inbox" path="/pages/polarAreaChart" />
            <TopbarMenuLink title="Wykres kolowy" icon="inbox" path="/pages/doughnutChart" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Wyloguj" icon="exit" path="/" />
          </div>
        </Collapse>
      </div>
    );
  }
}
