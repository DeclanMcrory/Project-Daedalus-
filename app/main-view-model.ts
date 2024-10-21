import { Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
  private _recentInteractions: Array<{ description: string }>;
  private _ongoingTasks: Array<{ name: string; progress: number }>;

  constructor() {
    super();

    // Initialize with some dummy data
    this._recentInteractions = [
      { description: "Generated project timeline for Project X" },
      { description: "Analyzed dataset for market trends" },
      { description: "Provided code review for new feature" }
    ];

    this._ongoingTasks = [
      { name: "UI Design for Project Y", progress: 75 },
      { name: "Data Analysis for Q2 Report", progress: 40 },
      { name: "Bug Fixing for Release 2.0", progress: 90 }
    ];

    this.notifyPropertyChange('recentInteractions', this._recentInteractions);
    this.notifyPropertyChange('ongoingTasks', this._ongoingTasks);
  }

  get recentInteractions(): Array<{ description: string }> {
    return this._recentInteractions;
  }

  get ongoingTasks(): Array<{ name: string; progress: number }> {
    return this._ongoingTasks;
  }

  onNewProject() {
    console.log("New Project button tapped");
    // Implement new project creation logic here
  }

  onAIInsights() {
    console.log("AI Insights button tapped");
    // Implement AI insights generation logic here
  }
}