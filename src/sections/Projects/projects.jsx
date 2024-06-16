import styles from './projectsStyles.module.css';
import projects_img2 from '../../assets/photo_7.jpg';
import ProjectCard from '../../common/ProjectCard';

function projects() {
  return <sectionv id="projects" className={styles.container}>
    <h1 className={styles.sectiontitle}>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
            src={projects_img2}
            link={`https://reabplan.vercel.app/`}
            title={`Reab Plan`}
            info="Famous Places in Cambodia"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel"
        />
        <ProjectCard 
            src={projects_img2}
            link={`https://www.youtube.com/`}
            title={`Travel Website`}
            info="Look For New Places To Travel "
        />
    </div>
  </sectionv>
}

export default projects
