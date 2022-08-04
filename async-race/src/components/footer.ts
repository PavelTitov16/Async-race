import { FooterModel } from "../models/footer.model";

export class Footer implements FooterModel {
    public template: string;

    public async init(): Promise<string> {
        return this.template = `
        <footer class="footer-wrapper" id="footer">
            <div class="footer-container">
                <div class="footer-git">
                    <p class="footer-text">2022</p>
                    <a href="https://github.com/PavelTitov16" class="github-link"></a>
                </div>
                <div class="footer-rss">
                    <a href="https://rs.school/js/" class="rss"></a>
                </div>
            </div>
        </footer>`;
    }

    public async render(): Promise<string> {
        await this.init();
        return this.template;
    }
}
