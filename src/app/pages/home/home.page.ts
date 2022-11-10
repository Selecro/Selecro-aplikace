import { Component } from '@angular/core';

import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

constructor (private videoPlayer: VideoPlayer) { 

// Playing a video.
this.videoPlayer.play('asset/ion/chobotnicka1.mp4').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
}
}