import * as core from "@angular/core";
import "./style.css";

export class ManualComponent {
  name = "Component";

  updateName(newName: string) {
    this.name = newName;
  }
  static ngComponentDef = core.ɵdefineComponent({
    // This defines all the properties of an object @component changed tongComponentDef
    type: ManualComponent, // Nme of the componenet and for di
    selectors: [["manual-component"]], // actual html selector of the component
    factory: () => new ManualComponent(), // Function which returns instanciates the composnent
    template: (rf: core.ɵRenderFlags, ctx: ManualComponent) => {
      // Actual rendering of the component
      console.log(rf, ctx,"hello",rf & 1);
      if (rf & 1) {
        console.log(rf,"1",rf & 1)
        // Create: This runs only on first render
        core.ɵE(0, "h2"); // Coponent starter
        core.ɵT(1, "Hello, "); // Actual text node
        core.ɵT(2); // Empty text node for change detection
        core.ɵe(); // Component ending

        core.ɵT(3, "Your name: ");
        core.ɵE(4, "input");
        core.ɵL("input", $event => ctx.updateName($event.target.value));
        core.ɵe();
      }
      if (rf & 2) {
        console.log(rf,"2")
        // Update: This runs on every change detection
        core.ɵt(2, ctx.name); // ɵt text binding function in  angular first is the index of node seconfd is ts value
        core.ɵp(4, "value", ctx.name);//put the value of index 4 elemet in ctx.name
      }
    }
  });
}

core.ɵrenderComponent(ManualComponent); // Render component inthe dom tree
