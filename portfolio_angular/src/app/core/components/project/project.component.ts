import { TemplateBindingParseResult } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'project-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class Projects{
    openPdf(pdfAdress:string):void{
        console.log("click")
        window.open(pdfAdress, '_blank');
    }
}