import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ISong, SubsonicService } from '@Subular/core';

@Component({
  selector: 'track-info',
  templateUrl: 'track-info.component.html',
  styleUrls: ['track-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackInfoComponent implements OnInit, OnChanges {
  @Input() song: ISong;
  imgUrl;

  constructor(private subsonic: SubsonicService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.song) {
      this.imgUrl = this.subsonic.subsonicGetCoverUrl(this.song.id);
    }
  }
}
