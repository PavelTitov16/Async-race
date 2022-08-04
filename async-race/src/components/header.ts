import { HeaderModel } from '../models/header.model';

export class Header implements HeaderModel {
  public template: string;

  public async init(): Promise<string> {
    this.template = `
        <header class="header-wrapper">
            <div class="header-container">
                <h1 class="header-container__title" id="app-title">
                    Async Race
                </h1>
                <div class="audio-payer">
                  <audio class="audio" id="audio"></audio>
                  <div class="controls">
                    <div id="prev" class="audio-payer__btn prev"></div>
                    <div id="play" class="audio-payer__btn play"></div>
                    <div id="next" class="audio-payer__btn next"></div>
                  </div>
                  <progress class="progress-bar" id="progress-bar" value="0" max="1"></progress>
                  <div id="mute" class="audio-payer__btn mute"></div>
                </div>
                <nav class="header-nav">
                    <div class="header-nav__item">
                        <button id="garage-btn" class="header__btn button">
                            Garage
                        </button>
                    </div>
                    <div class="header-nav__item">
                        <button id="garage-btn" class="header__btn button">
                            Winners
                        </button>
                    </div>
                </nav>
            </div>
        </header>`;
    return this.template;
  }

  public async render(): Promise<string> {
    await this.init();
    return this.template;
  }
}
