import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { BlogEntry } from "../blog-entry/blog-entry.mode";

@Component({
    selector: "create-entry",
    templateUrl: "create-entry.component.html",
    styleUrls: ['create-entry.component.css']
})
export class CreateEntryComponent {

    /**
     * Inject the router and store it in a field named router.
     * We do this so we can navigate away from the create
     * entry component after the entry was submitted.
     * @param router - the Angular Router
     * 
     */
    constructor(public router: Router){}

    /**
     * This is our function that saves the entry in localStorage
     * It then navigates back to the list of blog entries.
     * 
     * @param form The form in which the user entered their blog entry
     */
    addEntry(form: NgForm) {
        let entries = [];
        const entriesString = localStorage.getItem("entries");
        if (entriesString !== null) {
            entries = JSON.parse(entriesString);
        }
        entries.push({
            title: form.value.title,
            content: form.value.content,
            date: new Date(),
        });
        localStorage.setItem('entries', JSON.stringify(entries));
        this.router.navigate(['blog']);
    }
}