import { LoaderStateType } from './../../core/utils/app.types';
import { LoaderService } from './../../core/services/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  show = false;
  subscription!: Subscription;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: LoaderStateType) => {
      this.show = state.show;
    });
  }
}
