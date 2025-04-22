import React from "react";
import { useAppContext } from "../../../../context/appContext";
import Wrapper from "../../wrappers/Cv";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";
import { motion } from "framer-motion";

const sectionStyle = {
  background: "#f8faff",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  marginBottom: "30px",
};

const Cv = () => {
  const { profileUser } = useAppContext();
  const { description, skillSet, workSet, educationSet } = profileUser;

  return (
    <Wrapper className="About">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sectionStyle}
      >
        <h1>
          <b>About</b>
        </h1>
        <p>{description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sectionStyle}
      >
        <h1>
          <b>Skills</b>
        </h1>
        <div className="information">
          <div className="skills">
            <div className="list">
              {skillSet.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    backgroundColor: "#dfe6fd",
                    color: "#2c3e50",
                    border: "none",
                    minWidth: "80px",
                    padding: "5px 10px",
                    borderRadius: "12px",
                    fontWeight: 500,
                    margin: "4px",
                  }}
                >
                  {item.skill}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sectionStyle}
      >
        <h1>
          <b>Education</b>
        </h1>
        <div className="educationlst">
          {educationSet.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Accordion
                className="education"
                style={{
                  borderRadius: "20px",
                  marginBottom: "15px",
                  background: "#f4f7fe",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontWeight: "bolder" }}>
                    {item.degree}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>College: </span>
                    <span>{item.college}</span>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Starting: </span>
                      <span>{item.startDate}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>EndDate: </span>
                      <span>{item.endDate}</span>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sectionStyle}
      >
        <h1>
          <b>Work Experience</b>
        </h1>
        <div className="educationlst">
          {workSet.map((item, index) => {
            const startDate = moment(item.startDate);
            const endDate = moment(item.endDate);
            const timespan = endDate.diff(startDate);
            const timespanString = moment.utc(timespan).format("YYYY-MM-DD");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Accordion
                  className="education"
                  style={{
                    borderRadius: "20px",
                    marginBottom: "15px",
                    background: "#f4f7fe",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ fontWeight: "bolder" }}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>Company: </span>
                      <span>{item.company}</span>
                      <div>
                        <span style={{ fontWeight: "bold" }}>Location: </span>
                        <span>{item.location}</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: "bold" }}>Starting: </span>
                        <span>{item.startDate}</span>
                      </div>
                      <div>
                        <span style={{ fontWeight: "bold" }}>EndDate: </span>
                        <span>{item.endDate}</span>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Cv;
