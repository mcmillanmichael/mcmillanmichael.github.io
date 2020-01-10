import React, { Component } from 'react';

export default class UltraMidLevelCard extends Component {
  render() {
    return (
        <div class="row">
            <div class="card bg-light col">
                <div class="card-body">
                    <h4 class="card-title">Ultra Electronics Airport Systems</h4>
                    <h5 class="card-text">Software Engineer <small>- 2011 to 2013</small></h5>
                    <p>I began work here as a Software Engineer 1 and already had knowledge of C# and the agile/scrum process.  So on the job I improved on these, and also quickly got to grips with WPF and Silverlight, Windows Workflow, Entity Framework, WCF, as well a lot more T-SQL.</p>
                    <p>I worked on the Silverlight front-end utilising Telerik’s toolkit, producing highly configurable data-grids that the customer could configure themselves.  The loading mechanism for the data-grids required work to improve performance, so a fair amount of time was spent on this, some of which was done at the Microsoft scalability labs.</p>
                    <p>Assisted in producing a Workflow designer in WPF, that allowed the client to create their own complex business rules.  This allowed us to spend more time developing product features and less time labouring over client-specific business logic.</p>
                    <p>Once the product had most of the functionality in place, we saw that overall system performance had become an issue.  I reviewed the indexes in our sql-server database, and using sql-profiler and the query execution plans, resolved some performance issues.  I then used a few memory and performance profilers (namely redgate and perfview) to hunt for memory, and cpu performance issues in both the client and server applications.  With this work complete, we went from being able to have only a handful of concurrent users to being able to support thousands.  This product is now live at several airports, used by hundreds of users, with several more airports on the roadmap.</p>
                    <p>During my time here, we were allowed 20% of our time to conduct our own research, and to keep up-to-date with modern technology.  I decided to use most of this time as R&D into different tech stacks that would be useful for a new product that was on the roadmap, such as Angular, Python, and Machine Learning, and sharing my findings in the development wide “Chapter Meetings”.  I’m not an expert in these topics by any means, but I find them interesting, and would love to keep learning!</p>
                </div>
            </div>
        </div>
    )
  }
}