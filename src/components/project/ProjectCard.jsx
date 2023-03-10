import React from "react";
import { Pencil, Trash } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <Pencil /> Editar
        </Link>
        <button onClick={remove}>
          <Trash /> Excluir
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
