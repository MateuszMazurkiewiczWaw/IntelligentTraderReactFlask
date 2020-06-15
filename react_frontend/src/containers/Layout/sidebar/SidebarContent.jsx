import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToDark, changeToLight } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Wyloguj" icon="exit" route="/log_in" onClick={this.hideSidebar} />
          <SidebarCategory title="Wybierz layout" icon="layers">
            <button type="button" className="sidebar__link" onClick={changeToLight}>
              <p className="sidebar__link-title">Tryb standardowy</p>
            </button>
            <button type="button" className="sidebar__link" onClick={changeToDark}>
              <p className="sidebar__link-title">Tryb Dracula</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Wybierz wykres" icon="diamond">
            <SidebarLink title="Wykres liniowy" route="/pages/lineChart" onClick={this.hideSidebar} />
            <SidebarLink title="Wykres obszarowy" route="/pages/polarAreaChart" onClick={this.hideSidebar} />
            <SidebarLink title="Wykres kolowy" route="/pages/doughnutChart" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Importuj dane" icon="diamond">
            <SidebarLink title="Importuj plik CSV" route="/pages/upload_csv" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
