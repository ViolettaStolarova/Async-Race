import CreateElement from '../../../utilities/createElement';
import CarCreateFormView from './carCreateForm/carCreateFormView';
import CarUpdateFormView from './carUpdateForm/carUpdateFormView';
import GarageControlButtonsView from './garageControlButtons/garageControlButtonsView';

class GaragePanelView {
  public carCreateFormView: CarCreateFormView;

  public carUpdateFormView: CarUpdateFormView;

  public garageControlButtonsView: GarageControlButtonsView;

  constructor() {
    this.carCreateFormView = new CarCreateFormView();
    this.carUpdateFormView = new CarUpdateFormView();
    this.garageControlButtonsView = new GarageControlButtonsView();
  }

  public render(): HTMLElement {
    const garagePanelContainer = this.renderGaragePanel();

    return garagePanelContainer;
  }

  private renderGaragePanel(): HTMLElement {
    const garagePanelContainer = new CreateElement('div', {
      className: 'garage-panel-container',
    }).createElement();

    this.carCreateFormView.render(garagePanelContainer);
    this.carUpdateFormView.render(garagePanelContainer);
    this.garageControlButtonsView.render(garagePanelContainer);

    return garagePanelContainer;
  }
}

export default GaragePanelView;
