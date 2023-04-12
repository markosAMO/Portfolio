import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class Footer{
    email: String ="marmoscoso1@gmail.com";
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSnitizer: DomSanitizer
      ){
        this.matIconRegistry.addSvgIcon('github',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/github.svg'));
        this.matIconRegistry.addSvgIcon('linkedIn',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'));
        this.matIconRegistry.addSvgIcon('gmail',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/gmail.svg'));
      }
}