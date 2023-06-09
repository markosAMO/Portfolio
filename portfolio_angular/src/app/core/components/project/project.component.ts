import { TemplateBindingParseResult } from "@angular/compiler";
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'project-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class Projects{
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSnitizer: DomSanitizer
      ){
        this.matIconRegistry.addSvgIcon('github',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/github.svg'));
        this.matIconRegistry.addSvgIcon('linkedIn',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'));
        this.matIconRegistry.addSvgIcon('gmail',  this.domSnitizer.bypassSecurityTrustResourceUrl('../assets/svg/gmail.svg'));
      }
    openPdf(pdfAdress:string):void{
        console.log("click")
        window.open(pdfAdress, '_blank');
    }
}