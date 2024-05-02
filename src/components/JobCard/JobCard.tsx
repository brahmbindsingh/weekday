import React from "react";
import hourglass from '../../assets/images/hourglass.png';
import { IJobDetails } from "../../constants/JobInterfaces";
import { capitalizeString, getJobProfile } from "../../utils/utils";
import './JobCard.css';

interface Props{
  jobDetails: IJobDetails
}

const JobCard = (props: Props) => {

  return (
    <div className="job-card">
      <div className="post-date">
        <img src={hourglass} alt="hourglass" className="hourglass-image" />
        <p className="post-time">Posted 10 days ago</p>
      </div>
      <div className="company-details">
        <img src="" alt="fampay" className="company-logo" />
        <div className="job-info">
          <p className="company-name">{props.jobDetails.jdUid}</p>
          <p className="job-profile">{getJobProfile(props.jobDetails.jobRole)}</p>
          <p className="job-location">{capitalizeString(props.jobDetails.location)}</p>
        </div>
      </div>
        {
          props.jobDetails.minJdSalary !== null ?
            <p className="salary">Estimated Salary: <span>{props.jobDetails.minJdSalary}</span> - <span>{props.jobDetails.maxJdSalary}</span> LPA</p> :
            <p className="salary">Estimated Salary: <span>{props.jobDetails.maxJdSalary}</span> LPA</p>
        }
      <h3 className="about-company">About Company:</h3>
      <h4 className="about-us">About Us</h4>
      <div className="job-description">
        <p>{props.jobDetails.jobDetailsFromCompany}</p>
        <a href={props.jobDetails.jdLink}>
          <div className="view-job">View Job</div>
        </a>
      </div>
      <div className="experience">
        <p>Minimum Experience</p>
        <span>{props.jobDetails.minExp} years</span>
      </div>
      <div className="job-action-buttons">
        <button className="easy-apply">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75" x="0px" y="0px"><path className = "svg-golden" d="M14.042,34H28a1,1,0,0,1,.978,1.209L24.151,57.749h0a.178.178,0,0,0,.116.227.174.174,0,0,0,.245-.064L46.793,27.656A1.038,1.038,0,0,0,45.958,26H32a1,1,0,0,1-.978-1.21L35.849,2.25a.178.178,0,0,0-.116-.227.24.24,0,0,0-.1-.024.18.18,0,0,0-.146.088L13.207,32.345A1.038,1.038,0,0,0,14.042,34Z"/></svg>
          <p>Easy Apply</p>
        </button>
        <button className="ask-for-referral">
          <p>Unlock referral asks</p>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
