import React, { createContext, useState, useEffect } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:3000/videos");
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      } else {
        console.error("Erro ao carregar o video");
      }
    } catch (error) {
      console.error("Erro de conexão com o servidor", error);
    }
  };

  //Buscar os videos ao montar o contexto
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, setVideos, fetchVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
