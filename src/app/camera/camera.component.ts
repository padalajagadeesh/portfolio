import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  videoElement!: HTMLVideoElement ;
  stream: MediaStream | null = null;

  ngOnInit(): void {
    this.startCamera();
    const selectedText = window.getSelection()?.toString();
    const textArea:any = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = selectedText;
    textArea.select();
    document.execCommand('copy');
    console.log(document.execCommand('copy'))
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }

  // Start the camera
  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.stream = stream;
        this.videoElement = document.querySelector('video')!;
        this.videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.log(error,'009909')
        console.error('Error accessing camera:', error);
      })
  }

  // Stop the camera
  stopCamera() {
    if (this.stream) {
      const tracks = this.stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  }
}
