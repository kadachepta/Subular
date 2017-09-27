import { Component, OnInit, Input, ChangeDetectionStrategy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IArtist } from '../../../shared-services/index';


@Component({
	selector: 'artist-list',
	templateUrl: 'artist-list.component.html',
	styleUrls: ['artist-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistListComponent implements OnInit {
	@Input() selectedArtistId: number;
	@Input() artists: IArtist[];
	@ViewChild('artistList') artistListUL: ElementRef;

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent) {
		if (this.artists) {
			const artist = this.searchArtistsWithDebounce(event.key);
		}
	}

	private searchValue = '';
	private timeOut;


	searchArtistsWithDebounce(value) {
		clearTimeout(this.timeOut);
		this.searchValue = this.searchValue + value;
		this.timeOut = setTimeout(() => {
			const artist = this.getFirstArtistThatStartsWith(this.searchValue);
			this.scrollToArtist(artist);
			this.searchValue = '';
		}, 300);
	}

	scrollToArtist(artist: IArtist) {
		if (artist) {
			const nativeHtmlUL = this.artistListUL.nativeElement as HTMLUListElement;
			const artistLI = nativeHtmlUL.querySelectorAll(`[class='${artist.id}']`)[0] as HTMLLIElement;
			nativeHtmlUL.scrollTop = artistLI.offsetTop - 25;
		}
	}

	getFirstArtistThatStartsWith(startsWith: string): IArtist {
		return this.artists.find(value => value.name.substr(0, startsWith.length).toLowerCase() == startsWith.toLowerCase());
	}

	ngOnInit() { }

}