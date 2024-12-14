import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  // videoElement!: HTMLVideoElement ;
  // stream: MediaStream | null = null;

  // ngOnInit(): void {
  //   this.startCamera();
  //   const selectedText = window.getSelection()?.toString();
  //   const textArea:any = document.createElement('textarea');
  //   document.body.appendChild(textArea);
  //   textArea.value = selectedText;
  //   textArea.select();
  //   document.execCommand('copy');
  //   console.log(document.execCommand('copy'))
  // }

  // ngOnDestroy(): void {
  //   this.stopCamera();
  // }

  // // Start the camera
  // startCamera() {
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //     .then((stream) => {
  //       this.stream = stream;
  //       this.videoElement = document.querySelector('video')!;
  //       this.videoElement.srcObject = stream;
  //     })
  //     .catch((error) => {
  //       console.log(error,'009909')
  //       console.error('Error accessing camera:', error);
  //     })
  // }

  // // Stop the camera
  // stopCamera() {
  //   if (this.stream) {
  //     const tracks = this.stream.getTracks();
  //     tracks.forEach((track) => track.stop());
  //   }
  // }
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef;
  private stream!: MediaStream;
  private intervalId!: any;
  constructor(private imageUploadService:ImageUploadService){

  }
  capturedImages: string[] = [];
  ngOnInit(): void {
    // this.intervalId = setInterval(() => {
    this.startCamera();
    console.log('pageload')
    this.capturedImages = JSON.parse(localStorage.getItem('capturedImages') || '[]');
  // }, 5000);
  }

  ngOnDestroy(): void {
    this.stopCamera();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCamera(): void {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream: MediaStream) => {
        this.stream = stream;
        this.videoElement.nativeElement.srcObject = stream;

        // Start capturing images every 5 seconds
        // this.intervalId = setInterval(() => {
          this.captureImage();
        // }, 5000); 
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }

  stopCamera(): void {
    if (this.stream) {
      const tracks = this.stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  }

  captureImage(): void {
    console.log('captured')
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image as a data URL and store it in localStorage
    const imageData = canvas.toDataURL('image/png');
    const images = JSON.parse(localStorage.getItem('capturedImages') || '[]');
    images.push(imageData);
    localStorage.setItem('capturedImages', JSON.stringify(images));
    this.capturedImages.push(imageData);
     // Send the image to the backend
    //  this.imageUploadService.uploadImage(imageData).subscribe({
    //   next: (response) => {
    //     console.log('Image uploaded successfully:', response);
    //   },
    //   error: (error) => {
    //     console.error('Error uploading image:', error);
    //   },
    // });
  }
}
