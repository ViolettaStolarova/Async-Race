import GarageBoxView from './garageBox/garageBoxView';
import GaragePanelView from './garagePanel/garagePanelView';

export interface IGaragePageView {
  page: number;
  garagePanelView: GaragePanelView;
  garageBoxView: GarageBoxView;
}
