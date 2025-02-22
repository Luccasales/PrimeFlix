import React, { useState } from "react";

import styles from "./ModalEdit.module.css";

const Modal = ({ video, onClose, fetchVideos }) => {
  const [title, setTitle] = useState(video.title);
  const [links, setLinks] = useState(video.links);
  const [tags, setTags] = useState(video.tags.join(","));

  const handleSave = async () => {
    const updatedVideo = {
      ...video,
      title,
      links,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    try {
      const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVideo),
      });

      if (response.ok) {
        console.log("Video atualizado");
        fetchVideos();
        onClose();
      } else {
        console.log("Erro ao atualizar o video");
      }
    } catch (error) {
      console.error("Erro de conexão ao atualizar", error);
    }
  };

  return (
    <div className={styles.LayoutModal}>
      <div className={styles.ContentModal}>
        <h2>Editar video</h2>
        <label>
          Titulo do video
          <input
            type="text"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          Link do video:
          <input
            type="text"
            name="link"
            required
            onChange={(e) => setLinks(e.target.value)}
            value={links}
          />
        </label>
        <label>
          Tags
          <input
            type="text"
            nome="tags"
            required
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <div className={styles.buttonsModal}>
          <button onClick={handleSave} className="buttons-accept">
            Salvar
          </button>
          <button onClick={onClose} className="buttons-cancel">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
