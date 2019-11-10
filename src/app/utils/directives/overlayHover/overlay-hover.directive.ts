import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: "[appOverlayHover]"
})
export class OverlayHoverDirective {
  child: any;

  @Input("appOverlayHover") buttonAction;
  @Input("overlayHoverId") buttonId;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document
  ) {
    let child = document.createElement("button");
    this.child = child;
    this._renderer.appendChild(this._el.nativeElement.parentNode, this.child);
    this.child.classList.add(`directive-overlay-button`);
    this.child.classList.add(`button`);
    var t = document.createTextNode("Editar");
    this.child.appendChild(t);
    this.child.addEventListener("click", () => {
      this.buttonAction(this.buttonId);
    });
  }

  @HostListener("mouseenter") onMouseEnter() {
    this._el.nativeElement.classList.add("directive-overlay");
    this.child.classList.remove("directive-overlay-button");
  }

  @HostListener("mouseleave") onMouseLeave() {
    var self = this;
    this.child.addEventListener("mouseover", function(e) {
      self._el.nativeElement.classList.add("directive-overlay");
      self.child.classList.remove(`directive-overlay-button`);
    });
    this._el.nativeElement.classList.remove("directive-overlay");
    this.child.classList.add(`directive-overlay-button`);
  }
}
