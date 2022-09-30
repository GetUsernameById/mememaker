import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PositionsEnum } from './shared/enums/positions.enum';
import { ThemePalette } from '@angular/material/core';
import html2canvas from 'html2canvas';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('screenText') screenText!: ElementRef<CdkDrag>;

  imageUrl = '';
  dragPosition = { x: 0, y: 0 };
  color: ThemePalette = 'primary';
  touchUi = true;
  disabled = false;

  positionList: { key: PositionsEnum; value: string }[] = [
    { key: PositionsEnum.Top, value: 'Вверх' },
    { key: PositionsEnum.Middle, value: 'Центр' },
    { key: PositionsEnum.Down, value: 'Низ' },
  ];

  positionStyles: { key: PositionsEnum; style: string }[] = [
    { key: PositionsEnum.Top, style: 'justify-content: center' },
    { key: PositionsEnum.Middle, style: 'justify-content: center; align-items: center;' },
    { key: PositionsEnum.Down, style: 'justify-content: center; align-items: end;' },
  ];

  fontSizeControl = new FormControl(24);
  colorControl = new FormControl();
  fileControl = new FormControl();
  textControl = new FormControl();
  positionsControl = new FormControl(this.positionList[1].key);

  get imageStyle() {
    return this.positionStyles.find(item => item.key === this.positionsControl.value)?.style;
  }

  get textSize() {
    return this.fontSizeControl.value ? `font-size: ${this.fontSizeControl.value}px;` : '';
  }

  get textColor() {
    return `color: ${this.colorControl.value};`;
  }

  get textStyle() {
    return this.textColor + this.textSize;
  }

  ngOnInit() {
    this.positionsControl.valueChanges.subscribe(() => {
      this.dragPosition = { x: 0, y: 0 };
    });
  }

  onSelectFile(event: any) {
    if (event.target?.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = event => {
        // called once readAsDataURL is completed
        this.imageUrl = event.target?.result as string;
      };
    }
  }

  downloadImage() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.download = 'manpower_efficiency.jpg';
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
    });
  }

  formatLabel(value: number) {
    return value + 'px';
  }
}
