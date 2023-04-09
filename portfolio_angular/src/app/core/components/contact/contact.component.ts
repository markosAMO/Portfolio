import { TemplateBindingParseResult } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class Contact implements OnInit{
    contactForm: FormGroup;
    email:String;
    constructor(private fb: FormBuilder){
    }
    
    ngOnInit(): void {
        this.email="marmoscoso1@gmail.com";
        this.contactForm= this.fb.group({
            name: ['',Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['',Validators.required]
        })
    }
    submitForm(){
        console.log(this.contactForm)
    }
}