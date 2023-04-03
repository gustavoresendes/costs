import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";

import styles from "./NewProject.module.scss";

const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and service
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", { message: "Projeto enviado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
};

export default NewProject;