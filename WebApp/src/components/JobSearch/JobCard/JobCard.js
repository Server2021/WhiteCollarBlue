import React from "react";
import {Link} from "react-router-dom";
import "./JobCard.scss";
import {IoIosArrowForward} from "react-icons/io";
import {isNullOrUndefined} from "util";
import {formatDate} from "../../../data/dateformatting";

export const JobCard = props => {
  const job = props.job;
  const address = job.address;
  const categories = job.categories
    .filter(c => !isNullOrUndefined(c))
    .map(c => c.name)
    .join(", ");
  const skills = job.skills
    .filter(s => !isNullOrUndefined(s))
    .map(s => s.name)
    .join(", ");

  return (
    <Link to={`/jobseeker/board/${job.id}`}>
      <div className="jobcard">
        <div className="jobcard__header">
          <div>
            <h4>{job.title}</h4>
            {(categories || skills) && (
              <span>
                {categories && <b>{categories}</b>}
                {skills && (
                  <>
                    &nbsp;
                    <IoIosArrowForward />
                    &nbsp;{skills}
                  </>
                )}
              </span>
            )}
          </div>
          <div className="jobcard__header__date">
            <span>{formatDate(job.created, true)}</span>
          </div>
        </div>
        <div className="jobcard__body">
          <div className="jobcard__overview">
            {address && (
              <div>
                {address.country && (
                  <>
                    <b>{address.country}</b>
                    &nbsp;
                    <IoIosArrowForward />
                    &nbsp;
                  </>
                )}
                {address.region && (
                  <>
                    <b>{address.region}</b>
                    &nbsp;
                    <IoIosArrowForward />
                    &nbsp;
                  </>
                )}
                {address.locality && (
                  <>
                    {address.locality}
                    &nbsp;
                  </>
                )}
              </div>
            )}
            {job.type && (
              <div>
                <b>{job.type}</b>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
