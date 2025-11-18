import React from 'react'
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaDocker, FaAws, FaGithub, FaTools, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiPostman, SiSwagger, SiMysql, SiMariadb, SiPostgresql, SiMongodb, SiCockroachlabs, SiJenkins, SiApachetomcat, SiPrometheus, SiAmazonrds, SiGrafana, SiJira, SiAtlassian,SiScrumalliance  } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { GoOrganization } from "react-icons/go";

const Skills = () => {
  return (
    <div className="container-fluid py-5 " style={{ backgroundColor: "#121212" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white">
          🚀 My Top Skills
        </h2>
        <p className="text-secondary">
          A showcase of my technical strengths and tools I work with
        </p>
      </div>
      <h4 className="text-primary fw-bold mb-3">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px" }}>
          Programming Languages
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaJava size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Java
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card bg-dark text-white p-4 border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaPython size={35} />
            <span className="fw-semibold mt-2">Python</span>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card bg-dark text-white p-4 border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}>
            <SiSpringboot size={35} />
            <span className="fw-semibold mt-2">Spring Boot</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card bg-dark text-white p-4 border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiHibernate size={35} />
            <span className="fw-semibold mt-2">Hibernate</span>
          </div>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-3 mt-5 ">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px", }}>
          Frontend Technologies
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaHtml5 size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              HTML
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaCss3Alt size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              CSS
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaBootstrap size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Bootstrap
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaReact size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              React.js
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-3 mt-5 ">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px", }}>
          APIs & Tools
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <BiCodeBlock size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              REST API
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiPostman size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Postman
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiSwagger size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Swagger
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaTools size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              JMeter
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-3 mt-5 ">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px", }}>
          Databases
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiMysql size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              MySQl
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiMariadb size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              MariaDB
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiPostgresql size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              PostgreSQl
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiMongodb size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              MongoDB
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiCockroachlabs size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              CockroachDB
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            < SiAmazonrds size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              AWS RDS
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-3 mt-5 ">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px", }}>
          DevOps & Tools
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            < FaGitAlt size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Git
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaGithub size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              GitHub
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaAws size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              AWS
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaDocker size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Docker
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiJenkins size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Jenkins
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiApachetomcat size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Apache Tomcat
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiPrometheus size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Prometheus
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiGrafana size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Grafana
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-3 mt-5 ">
        <span style={{ borderLeft: "4px solid #0d6efd", paddingLeft: "10px", }}>
          Project Management & Operating System
        </span>
      </h4>
      <div className="row text-center g-4">
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <GoOrganization size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              GitHub Organization
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <SiAtlassian size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Atlassian Jira
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div
            className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
            style={{
              height: "65px",
              padding: "10px 12px",
              borderRadius: "10px",
              gap: "12px"
            }}
          >
            <FaLinux size={28} />
            <span className="fw-semibold" style={{ fontSize: "16px" }}>
              Linux
            </span>
          </div>
        </div>
      <div className="col-6 col-md-3">
        <div
          className="card bg-dark text-white border border-secondary d-flex flex-row align-items-center"
          style={{
            height: "65px",
            padding: "10px 12px",
            borderRadius: "10px",
            gap: "12px"
          }}
        >
          <SiScrumalliance size={28} />
          <span className="fw-semibold" style={{ fontSize: "16px" }}>
            Agile / Scrum
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills
