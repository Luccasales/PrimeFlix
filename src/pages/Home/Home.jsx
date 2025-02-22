// src/pages/Home/Home.jsx
import { useContext, useState } from "react";
import styles from "./Home.module.css";
import { VideoContext } from "../../../hooks/videoContext";

import ModalEdit from "../../pages/ModalEdit/ModalEdit";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { videos, fetchVideos } = useContext(VideoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const navigate = useNavigate();

  const handleWtach = (id, title) => {
    navigate(`/player/${id}`, { state: { title } });
  };

  const handleEdit = (id) => {
    setSelectedVideo(videos.find((video) => video.id === id));
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Video excluido com sucesso");
        fetchVideos();
      } else {
        console.error("Erro ao excluir o video", error);
      }
    } catch (error) {
      console.error("erro de conexão ao excluir mais tarde:", error);
    }
  };

  return (
    <div className={styles.content}>
      <h2>Vídeos</h2>
      <p>Vídeos adicionados recentemente:</p>
      <div className={styles.videos}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className={styles.video_card}>
              <h3>{video.title}</h3>
              <p>
                <strong>Tags:</strong> {video.tags.join(", ")}
              </p>
              <div className={styles.buttons}>
                <button
                  onClick={() =>
                    handleWtach(video.links.split("v=")[1], video.title)
                  }
                  className="buttons-accept"
                >
                  Assistir
                </button>

                <button
                  onClick={() => handleEdit(video.id)}
                  className={styles.editButton}
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(video.id)}
                  className="buttons-cancel"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum vídeo adicionado ainda.</p>
        )}
      </div>
      {isModalOpen && (
        <ModalEdit
          video={selectedVideo}
          onClose={() => setIsModalOpen(false)}
          fetchVideos={fetchVideos}
        />
      )}
    </div>
  );
};

export default Home;
