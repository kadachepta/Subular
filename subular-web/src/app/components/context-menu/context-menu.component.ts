import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MenuItem, ContextMenu } from 'primeng/primeng';
import { ISong, SubsonicService } from '../../../subular-shared/index';
import { PlayerService } from '../../services/player.service';
import { IPlaylist } from '../../../subular-shared/interfaces/index';
import { Command } from 'protractor';

@Component({
	selector: 'context-menu',
	templateUrl: 'context-menu.component.html',
	styleUrls: ['context-menu.component.css'],
})

export class ContextMenuComponent implements OnInit {
	@Input() selectedSong: ISong;
	@ViewChild(ContextMenu) contextMenu: ContextMenu;

	contextMenuItems: MenuItem[];

	constructor(private subsonic: SubsonicService,
		private playerService: PlayerService) {

	}

	ngOnInit() {
		this.contextMenuItems = [{
			label: 'Coming soon...',
			command: (event) => console.log(this.selectedSong)
		}, {
			label: 'Add to playlist:',
			items: []
		}] as MenuItem[];

		const newPlaylistMenuItem = (playlist: IPlaylist) => ({
			label: playlist.name, command: (event) => {
				console.log(this.selectedSong, event, playlist.id);
			}
		});

		this.subsonic.getPlaylists().subscribe(playlists => {
			this.contextMenuItems[1].items = playlists.map(newPlaylistMenuItem);
		});

	}
}