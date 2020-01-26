import * as core from "@angular/core";
import "./style.css";
import { NgIf } from "@angular/common";
(NgIf as any).ngDirectiveDef = core.ɵdefineDirective({
  // define a directice
  type: NgIf, // type of directive
  selectors: [["", "ngIf", ""]], // slector in
  factory: () =>
    new NgIf(core.ɵinjectViewContainerRef(), core.ɵinjectTemplateRef()),
  inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" }
});
export class ManualComponent {
  name = "Component";

  updateName(newName: string) {
    this.name = newName;
  }

  static ngComponentDef = core.ɵdefineComponent({
    directives: [NgIf], // Ng If directive added to our component
    // This defines all the properties of an object @component changed tongComponentDef
    type: ManualComponent, // Nme of the componenet and for di
    selectors: [["manual-component"]], // actual html selector of the component
    factory: () => new ManualComponent(), // Function which returns instanciates the composnent
    template: (rf: core.ɵRenderFlags, ctx: ManualComponent) => {
      // Actual rendering of the component
      console.log(rf, ctx, "hello", rf & 1);
      if (rf & 1) {
        console.log(rf, "1", rf & 1);
        // Create: This runs only on first render
        core.ɵE(0, "h2"); // Coponent starter
        core.ɵT(1, "Hello, "); // Actual text node
        core.ɵT(2); // Empty text node for change detection
        core.ɵe(); // Component ending

        core.ɵT(3, "Your name: ");
        core.ɵE(4, "input");
        core.ɵL("input", $event => ctx.updateName($event.target.value));
        core.ɵe();
        core.ɵC(5, ifTemplate, null, ['ngIf']);
      }
      if (rf & 2) {
        console.log(rf, "2");
        // Update: This runs on every change detection
        core.ɵt(2, ctx.name); // ɵt text binding function in  angular first is the index of node seconfd is ts value
        core.ɵp(4, "value", ctx.name); //put the value of index 4 elemet in ctx.name
        core.ɵp(5, 'ngIf', (ctx.name === 'Igor'));
      }
      function ifTemplate(rf: core.ɵRenderFlags, ctx: ManualComponent) {// Ng iF template
        if (rf & 1) {
          core.ɵE(0, "div");
          core.ɵE(1, "img", [
            "src",
            "https://pbs.twimg.com/tweet_video_thumb/C80o289UQAAKIqp.jpg"
          ]);
          core.ɵe();
        }
      }
    }
  });
}

core.ɵrenderComponent(ManualComponent); // Render component inthe dom tree
