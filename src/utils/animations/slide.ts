import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes
} from "@angular/animations";

export const SlideInOutAnimation = [
  trigger("slideInOut", [
    state(
      "in",
      style({
        height: "600px",
        opacity: "1",
        overflow: "hidden"
      })
    ),
    state(
      "out",
      style({
        height: "0px",
        opacity: "0",
        overflow: "hidden"
      })
    ),
    transition("in => out", [
      group([
        animate(
          "200ms ease-in-out",
          style({
            opacity: "0"
          })
        ),
        animate(
          "600ms ease-in-out",
          style({
            height: "0px"
          })
        )
      ])
    ]),
    transition("out => in", [
      group([
        animate(
          "600ms ease-in-out",
          style({
            height: "600px"
          })
        ),
        animate(
          "200ms ease-in-out",
          style({
            opacity: "1"
          })
        )
      ])
    ])
  ])
];
