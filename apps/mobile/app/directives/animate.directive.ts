/**
 * Add this to your app's SharedModule declarations
 */

import { Directive, ElementRef, Input } from '@angular/core';

// nativescript
import { View } from 'tns-core-modules/ui/core/view';
import { Animation, AnimationDefinition } from 'tns-core-modules/ui/animation';

@Directive({
	selector: '[animate]'
})
export class AnimateDirective {

	@Input() animate: AnimationDefinition;

	private _view: View;
	private _animation: Animation;
	private _viewInit = false;

	constructor(private _el: ElementRef) { }

	ngAfterViewInit() {
		if (!this._viewInit) {
			this._viewInit = true;
			this._initAndPlay();
		}
	}

	ngOnDestroy() {
		this._cancel();
	}

	private _initAndPlay() {
		if (!this._view && this._el && this._el.nativeElement) {
			this._view = this._el.nativeElement;
		}
		if (this._view && this.animate) {
			let animateOptions: AnimationDefinition = this.animate;
			animateOptions.target = this._view;
			this._animation = new Animation([animateOptions]);
			this._play();
		}
	}

	private _cancel() {
		if (this._animation && this._animation.isPlaying) {
			this._animation.cancel();
		}
	}

	private _play() {
		if (this._animation && !this._animation.isPlaying) {
			this._animation.play().then(_ => {
				// ignore
			}, (err) => {
				// ignore
				// need this here to prevent:
				// Unhandled Promise rejection: Animation cancelled. ; Zone: <root> ; Task: null ; Value: Error: Animation cancelled. _rejectAnimationFinishedPromise@file:///app/tns_modules/tns-core-modules/ui/animation/animation-common.js:98:31 [<root>]
			});
		}
	}
}