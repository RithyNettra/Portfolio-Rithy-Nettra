import styles from './SkillsStyle.module.css';
import CheckMark from '../../assets/check.png';
import SkillList from '../../common/skillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className={styles.sectiontitle}>Skils</h1>
        <div className={styles.skillList}>
            < SkillList src={CheckMark} skill="HTML"/>
            < SkillList src={CheckMark} skill="CSS"/>
            < SkillList src={CheckMark} skill="Javascript"/>
            < SkillList src={CheckMark} skill="React JS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            < SkillList src={CheckMark} skill="Angular"/>
            < SkillList src={CheckMark} skill="Vue"/>
            < SkillList src={CheckMark} skill="Vite"/>
            < SkillList src={CheckMark} skill="Redux"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            < SkillList src={CheckMark} skill="Git"/>
            < SkillList src={CheckMark} skill="Api"/>
            < SkillList src={CheckMark} skill="Jest"/>
            < SkillList src={CheckMark} skill="Bootstrap"/>
        </div>
    </section>
  )
}

export default Skills