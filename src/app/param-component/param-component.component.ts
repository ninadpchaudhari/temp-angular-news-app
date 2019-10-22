import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyServerService } from '../dummy-server.service';

@Component({
  selector: 'app-param-component',
  templateUrl: './param-component.component.html',
  styleUrls: ['./param-component.component.css']
})
export class ParamComponentComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute, private dummyService: DummyServerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dummyService.dummyFunction(this.id);
  }
}
