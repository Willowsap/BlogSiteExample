import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './blog-entry/blog-entry.mode';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  entries: Array<BlogEntry> = [];
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
      this.getEntries();
      this.isLoading = false;
  }

  /**
   * Here we get the entries array from local storage
   * We check if it exists before parsing the string and assigning 
   * it to the entries array.
   * 
   * Note that the entries array was already initialized to an empty array
   * so it will not be null if there is no entryString
   * 
   * We then replace each date string with a new Date object since
   * JSON does not automatically turn these strings into date.
   * 
   * MAKE SURE YOU UNDERSAND HOW THIS FOR EACH LOOP WORKS
   * It looks pretty different from how we do it in Java,
   * but I will ask about it on the final test
   */
  getEntries(): void {
    const entryString = localStorage.getItem('entries');
    if (entryString !== null)
      this.entries = JSON.parse(entryString);
    this.entries.forEach((b: BlogEntry) => {
      b.date = new Date(b.date);
    })
  }

}
