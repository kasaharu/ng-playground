import { Component } from '@angular/core';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.scss'],
})
export class StampPageComponent {
  images = [
    { id: 1, url: 'assets/animal_coelacanth.png' },
    { id: 2, url: 'assets/kodai_elasmotherium.png' },
    { id: 3, url: 'assets/kodai_same_helicoprion.png' },
    { id: 4, url: 'assets/kodai_shisochou.png' },
  ];
  selectedImageId: number | null = null;
  showStampField = true;

  clickedImage(imageId: number) {
    this.selectedImageId = imageId;
  }
}
