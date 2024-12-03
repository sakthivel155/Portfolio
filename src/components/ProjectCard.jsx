import arrow from '../assets/icons/arrow.svg';
import githubIcon from '../assets/icons/github.svg';

import PropTypes from 'prop-types';

const ProjectCard = (props) => {
    const { name, imageUrl, liveLink, gitRepo } = props;

    return (
        <div className='card-container'>
            <img src={imageUrl} alt={name} className='card-image' />
            <a href={gitRepo} target='blank'><img src={githubIcon} alt="github-icon" className='repo-link' /></a>
            <a href={liveLink} target='blank'><img src={arrow} alt="arrow icon" className='arrow-icon'/></a>
            <p className='card-name'>{name}</p>
        </div>
    )
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl:PropTypes.string.isRequired,
    liveLink:PropTypes.string.isRequired,
    gitRepo:PropTypes.string.isRequired
  }
export default ProjectCard;