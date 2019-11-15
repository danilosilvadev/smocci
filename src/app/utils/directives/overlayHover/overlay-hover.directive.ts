import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appOverlayHover]"
})
export class OverlayHoverDirective {
  child: any;

  @Input("appOverlayHover") buttonAction;
  @Input("overlayHoverId") buttonId;

  constructor(private _el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this._el.nativeElement.classList.add("directive-overlay");
  }

  @HostListener("mouseleave") onMouseLeave() {
    var self = this;
    this._el.nativeElement.addEventListener("mouseover", function(e) {
      self._el.nativeElement.classList.add("directive-overlay");
    });
    this._el.nativeElement.classList.remove("directive-overlay");
  }
}
