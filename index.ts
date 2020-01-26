import * as core from '@angular/core';
import './style.css';

export class ManualComponent {
  static ngComponentDef = core.ɵdefineComponent({ // This defines all the properties of an object @component changed tongComponentDef 
    type: ManualComponent,// Nme of the componenet and for di
    selectors: [['manual-component']], // actual html selector of the component
    factory: () => new ManualComponent(), // Function which returns instanciates the component
    template: (rf: core.ɵRenderFlags, ctx: ManualComponent) => { // Actual rendering of the component
      core.ɵE(0, 'h2'); // Coponent starter
      core.ɵT(1, 'Hello, Component'); // Actual text node
      core.ɵe(); // Component ending
    },
  });
}

core.ɵrenderComponent(ManualComponent);// Render component inthe dom tree
