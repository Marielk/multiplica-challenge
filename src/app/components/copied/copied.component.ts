import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copied',
  templateUrl: './copied.component.html',
  styleUrls: ['./copied.component.css']
})
export class CopiedComponent implements OnInit {
  @Input () colorCopied: string;
  constructor() { }

  ngOnInit(): void {
  }

}
