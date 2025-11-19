import React from "react";

const About = () => {
    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#0f0f0f",
                padding: "80px 20px 40px",
                color: "#ffffff",
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    fontSize: "42px",
                    fontWeight: "700",
                    marginBottom: "40px",
                }}
            >
                About Me
            </h1>

            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                    fontSize: "18px",
                    opacity: "0.9",
                }}
            >
                <p style={{ marginBottom: "25px" }}>
                    Hi, I’m Santosh Kumar, a DevOps Engineer and React.js enthusiast with a strong foundation in Java, Spring Boot, REST API development, cloud technologies, and CI/CD automation. I enjoy building efficient backend systems and deploying applications using modern DevOps tools while continuously learning frontend development with React.
                </p>

                <p style={{ marginBottom: "25px" }}>
                    I have hands-on experience working with Spring Boot, Hibernate, MariaDB/PostgreSQL, Jenkins, Docker, AWS (EC2, ECS, S3, RDS) and API testing tools like Postman, Swagger, and JMeter.
                    During my projects, I have developed and deployed complete microservice-based applications and automated the deployment workflow using CI/CD pipelines.
                </p>

                <p style={{ marginBottom: "25px" }}>
                    Currently, I am expanding my skills into frontend development (React.js) and aiming to become a well-rounded engineer capable of building and deploying full-stack applications.
                </p>

                <p style={{ marginBottom: "25px" }}>
                    I love exploring new technologies, solving backend challenges, and deploying scalable applications on cloud platforms. My goal is to contribute to real-world projects where I can combine my backend, DevOps, and growing frontend skills.
                </p>
            </div>
            <h1 style={{
                textAlign: "center",
                fontSize: "42px",
                fontWeight: "700",
                marginTop: "50px",
            }}>Education</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100" style={{backgroundColor:"black"}}>
                        <img src="https://i.ytimg.com/vi/oLQYQ70Uq4Q/sddefault.jpg" class="small-edu-img" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" style={{color: "white"}}>Sai Nath University Ranchi Jharkhand </h5>
                            <p class="card-text" style={{color:"white"}}>B.C.A - 8.5 CGPA</p>
                            <p class="card-text" style={{color:"white"}}>Aug 2022 - May 2025</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{backgroundColor:"black"}}>
                        <img src="/school (1).jpg" class="card-edu-img"alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"white"}}>Plus Two High School Atka</h5>
                            <p class="card-text" style={{color: "white"}}>XII - PCM - 85.8</p>
                            <p class="card-text" style={{color:"white"}}>Aug 2020 - July 2022</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{backgroundColor:"black"}}>
                        <img src="/school (1).jpg" class="card-edu-img" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title " style={{color:"white"}}>Plus Two High School Atka</h5>
                            <p class="card-text" style={{color: "white"}}>X - 82%</p>
                            <p class="card-text" style={{color:"white"}}>Mar 2018 - July 2020</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
