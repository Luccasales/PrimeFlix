import { useState, useContext } from "react";
import styles from "./CreateVideo.module.css";
import { v4 as uuidv4 } from "uuid";
import { VideoContext } from "../../../hooks/videoContext";

const CreateVideo = () => {
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState("");
  const [tags, setTags] = useState("");
  const { setVideos, fetchVideos } = useContext(VideoContext);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    console.log(title);

    //Sem arrow function pq retorna objeto

    const newVideos = {
      id: uuidv4(),
      title,
      links,
      tags: tags.split(",").map((tag) => tag.trim().toLowerCase()),
    };

    //Checar se todos os valores
    if (!title || !links || !tags) {
      setFormError("Por favor, preencha todos os campos!");
    }
    //fazer trycatch para enviar as coisas pro db
    try {
      const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideos),
      });

      if (response.ok) {
        console.log("Video adicionado com sucesso!");

        setTitle("");
        setLinks("");
        setTags("");

        fetchVideos();
      } else {
        console.error("Erro ao adicionar video");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };

  return (
    <form className={styles.form_video} onSubmit={handleSubmit}>
      <label>
        Titulo do video
        <input
          placeholder="Insira o titulo video"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Link do video
        <input
          placeholder="Insira o link do video"
          required
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
      </label>
      <label>
        tags
        <input
          placeholder="Tags video"
          required
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </label>
      <button className="accept_button" type="submit">
        Adicionar video
      </button>
    </form>
  );
};

export default CreateVideo;
