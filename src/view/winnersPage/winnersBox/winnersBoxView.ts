import CreateElement from '../../../utilities/createElement';

class WinnersBoxView {
  public render(): HTMLElement {
    const winnersBox = this.renderWinnersBox();

    return winnersBox;
  }

  private renderWinnersBox(): HTMLElement {
    const winnersBoxContainer = new CreateElement('div', {
      className: 'winners-box-container',
    }).createElement();

    const tableHead = new CreateElement(
      'div',
      { className: 'winners-table-head' },
      `
    <div class='id table-title'>ID</div>
    <div class='win-car table-title'>Car</div>
    <div class='win-model table-title'>Model</div>
    <div class='car-wins table-title'>Wins</div>
    <div class='car-time table-title'>Best<br>time</div>
  `
    ).createElement();

    const winnersTable = new CreateElement('div', { className: 'winners-table' }).createElement();

    winnersBoxContainer.append(tableHead);
    winnersBoxContainer.append(winnersTable);

    return winnersBoxContainer;
  }
}

export default WinnersBoxView;
