import { Component, Input } from '@angular/core';
import { BlogEntry } from './blog-entry.mode';

/**
 * This component is responsible for displaying a single
 * blog entry. It receives the entry item from
 * the component that is displaying this component.
 */
@Component({
  selector: 'app-blog-entry[entry]',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent {
  @Input() entry!: BlogEntry;
}
