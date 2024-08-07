import { Component, h, Element, State, Prop, Method } from '@stencil/core';
import 'dhtmlx-gantt'; // Importing the npm package

declare const gantt: any; 

@Component({
  tag: 'my-gentt',
  styleUrl: 'my-gentt.css',
  shadow: true,
})
export class MyGentt {
  @Element() el: HTMLElement;
  @State() isLoading: boolean = false;


  componentDidLoad() {
    gantt.init(this.el.shadowRoot.querySelector('#gantt_here'));

    gantt.parse({
			data: [
				{ id: 1, text: "Project #2", start_date: "01-04-2023", duration: 18, progress: 0.4, open: true },
				{ id: 2, text: "Task #1", start_date: "02-04-2023", duration: 8, progress: 0.6, parent: 1 },
				{ id: 3, text: "Task #2", start_date: "11-04-2023", duration: 8, progress: 0.6, parent: 1 }
			],
			links: [
				{id: 1, source: 1, target: 2, type: "1"},
				{id: 2, source: 2, target: 3, type: "0"}
			]
		});

  }
  render() {
    return (
      <div id="gantt_here" style={{ width: '100%', height: '500px' }}></div>
    );
  }
}
