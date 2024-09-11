import { Component, h, Element, State } from '@stencil/core';
import 'dhtmlx-gantt'; // Importing the npm package

declare const gantt: any; 

@Component({
  tag: 'auto-schedule',
  styleUrl: 'auto-schedule.css',
  shadow: true,
})
export class autoschedule {
  @Element() el: HTMLElement;
  @State() isLoading: boolean = false;


  componentDidLoad() {
    gantt.init(this.el.shadowRoot.querySelector('#gantt_here'));

    gantt.plugins({
      auto_scheduling: true
    });

	gantt.templates.scale_cell_class = function (date:any) {
		if (!gantt.isWorkTime(date)) {
			return "weekend";
		}
	};
	gantt.templates.timeline_cell_class = function (item:any, date:any) {
		if (!gantt.isWorkTime(date)) {
			return "weekend";
		}
		console.log(item,"item")
	};

    gantt.config.work_time = true;


	gantt.config.auto_scheduling = true;
	gantt.config.auto_scheduling_strict = true;
	gantt.config.auto_scheduling_compatibility = true;

	gantt.config.date_format = "%d-%m-%Y";

	gantt.config.start_date = new Date(2023, 3, 1);
	gantt.config.end_date = new Date(2023, 5, 1);


	gantt.attachEvent("onBeforeAutoSchedule", function () {
		gantt.message("Recalculating project schedule...");
		return true;
	});
	gantt.attachEvent("onAfterTaskAutoSchedule", function (task:any, new_date:any, predecessor:any) {
		if(task && predecessor){
			gantt.message({
				text: "<b>" + task.text + "</b> has been rescheduled to " + gantt.templates.task_date(new_date) + " due to <b>" + predecessor.text + "</b> constraint",
				expire: 4000
			});
		}
	});
  gantt.parse({
		data: [
			{id: 11, text: "Project #1", type: "project", progress: 0.6, open: true},
			{id: 12, text: "Task #1", start_date: "02-04-2023", duration: "5", parent: "11", progress: 1, open: true},
			{id: 13, text: "Task #2", start_date: "03-04-2023", type: "project", parent: "11", progress: 0.5, open: true},
			{id: 14, text: "Task #3", start_date: "02-04-2023", duration: "6", parent: "11", progress: 0.8, open: true},
			{id: 15, text: "Task #4", type: "project", parent: "11", progress: 0.2, open: true},
			{id: 16, text: "Final milestone", start_date: "15-04-2023", type: "milestone", parent: "11", progress: 0, open: true},
			{id: 17, text: "Task #2.1", start_date: "03-04-2023", duration: "2", parent: "13", progress: 1, open: true},
			{id: 18, text: "Task #2.2", start_date: "06-04-2023", duration: "3", parent: "13", progress: 0.8, open: true},
			{id: 19, text: "Task #2.3", start_date: "10-04-2023", duration: "4", parent: "13", progress: 0.2, open: true},
			{id: 20, text: "Task #2.4", start_date: "10-04-2023", duration: "4", parent: "13", progress: 0, open: true},
			{id: 21, text: "Task #4.1", start_date: "02-04-2023", duration: "4", parent: "15", progress: 0.5, open: true},
			{id: 22, text: "Task #4.2", start_date: "02-04-2023", duration: "4", parent: "15", progress: 0.1, open: true},
			{id: 23, text: "Mediate milestone", start_date: "14-04-2023", type: "milestone", parent: "15", progress: 0, open: true}
		],
		links: [
			{id: "10", source: "11", target: "12", type: "1"},
			{id: "11", source: "11", target: "13", type: "1"},
			{id: "12", source: "11", target: "14", type: "1"},
			{id: "13", source: "11", target: "15", type: "1"},
			{id: "14", source: "23", target: "16", type: "0"},
			{id: "15", source: "13", target: "17", type: "1"},
			{id: "16", source: "17", target: "18", type: "0"},
			{id: "17", source: "18", target: "19", type: "0"},
			{id: "18", source: "19", target: "20", type: "0"},
			{id: "21", source: "15", target: "23", type: "0"}
		]
	});
  }
  render() {
    return (
      <div id="gantt_here" style={{ width: '100%', height: '500px' }}></div>
    );
  }
}
