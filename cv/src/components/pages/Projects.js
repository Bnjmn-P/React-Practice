import React from 'react';
import Collapse from '../Collapse';

const YouTubeVideo = () => {
  return (
      <div>
          <iframe
              title="Embedded Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HSNv1dXBiHs"
          ></iframe>
      </div>
  );
}


const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <h2>Research and Development Project</h2>

      <Collapse>
<p>As part of my final year at Auckland University of Technology (AUT), I am part of a team tasked with examining how the faculty manages its academic courses. We had two semesters to complete this task. We worked together to figure out our roles and how we'd go about our research. We learned about our clients' needs and presented a plan for how we'd approach the project and what results they could expect.</p>
<p>To get the job done effectively, we decided to use an agile method called Scrum, which is a structured way of working together. I was chosen to be Scrum master and lead this process, based on my prior experience in a similar role. This meant I organized daily check-ins, explained our working methods, kept everyone up to date, tracked our progress, and helped solve any problems that came up.</p>
<p>Our clients wanted us to thoroughly examine the current system, finding places where we could use automation or make things work more efficiently. They also wanted us to suggest possible new features that another team could add later. To do this, we first identified all the important people and users of any software currently in use. We talked to them to understand what they put into the system, what they did with it, and what came out of it. This gave us both a broad overview and a detailed look at how the courses were being managed. We summarized all these processes in documents and diagrams, such as UML and use case diagrams.</p>
<p>We used a method called business process models to help us organize and understand how everything fit together. We kept in close touch with the clients to make sure our project was on the right path and meeting their expectations. Once they were sure we really understood the current process, we moved on to figuring out what new features they might want. Knowing the system inside out was important here because it helped us figure out what could be improved. </p>
<p>Again, we talked to the people involved to get their thoughts, as we needed to focus on what they wanted. After we'd put together a detailed document of all the features they might want to add, along with reasons for each one, we moved on to see if each feature was doable. We looked at the big picture requirements and regulations that needed to be met, as well as the current systems in place and its limitations.</p>
<p>When the project is finished, we'll present our findings in a final report. The clients can then give this report to a new team if they decide to go ahead with our suggested features. This whole experience taught me how important it is to have a clear plan, work closely with clients, and truly understand a system before trying to make it better.
</p>
</Collapse>
      
<h2>The Lost Relics</h2>
<Collapse collapsed={true}> {/* Initially collapsed */}
<p>For this project, I served as the Scrum Master for a five-member team tasked with developing a 2D platforming game using the Unity game engine. Together, we collaborated to create a product we could all take pride in.</p>
<p>During sprint zero, our focus was on honing our skills and strategizing for the upcoming sprint. Since I was unfamiliar with Unity, I dedicated a significant portion of my time to following tutorials and working on my own small projects. This proved invaluable, as it provided me with a clearer grasp of the environment and the project prior to actual development. As a team, we also began acquainting ourselves with the Agile Scrum development cycle.</p>
<p>Over the next two sprints, we tackled the project as a cohesive unit. I observed that with Agile, we all assumed equal responsibility for development, planning, documentation, and design. This shared responsibility bolstered our team's growth, and I believe we became highly efficient. I came to understand that Agile encouraged active participation, and it felt like we all had a stake in the ownership of the product. I was impressed by how Agile facilitated an equitable distribution of the workload.</p>
<p>Our team was composed of motivated individuals eager to put in the effort, which I believe was instrumental in our success in this environment. Breaking down the project into manageable increments, such as user stories, establishing clear goals, and adhering to agreed-upon standards, made the project more comprehensible and, consequently, more manageable.</p>
<p>There were areas where our team could have improved. Initially, in sprint one, our user stories were often inadequately scoped or dependent on others, likely due to our collective inexperience with both the process and Unity development. Even with increased proficiency, we were still navigating the intricacies of a project of this scale. However, this issue was largely rectified in sprint two, as we had gained a much better understanding and were able to reevaluate our user stories. The other area of potential enhancement was in test-driven development. We encountered challenges implementing this practice in Unity, especially as the features grew more complex, making it increasingly challenging to establish tests. While I acknowledge the benefits of testing first, in this project, I felt it was not a necessity</p>
<p>Through this experience, I gleaned valuable insights into Scrum Agile development and believe it is exceptionally well-suited to software development. It promotes a high degree of collaboration and adaptability. I thoroughly enjoyed my dual role as a developer and Scrum Master and would gladly embrace the opportunity to work in this environment again.</p>
<YouTubeVideo />
</Collapse>


    </section>
  );
}

export default Projects;
