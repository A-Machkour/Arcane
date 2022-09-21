import Box from "@mui/material/Box";
import ReactPlayer from "react-player";

const Story = () => {
  return (
    <div className="bgImgStory story" id="story">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          textAlign: "left",
        }}
        className="container"
      >
        <h1>Famille divisée</h1>
        <p className="description">
          Deux sœurs. Deux villes. Une découverte qui va bouleverser la face du
          monde.
          <br />
          <br />
          Inventeurs, voleurs, politiciens et parrains du crime sèment le chaos
          dans les villes de Piltover et de Zaun. Tous se dressent contre les
          barrières d'une société déchirée. Alors que la tension est à son
          comble, deux sœurs dérobent un artéfact au pouvoir sans pareil.
          Découvertes et dangers s'entremêlent tandis que des héros naissent et
          des liens se brisent. Ce pouvoir changera-t-il le monde ou le
          conduira-t-il à sa perte ? Bienvenue dans le monde d'Arcane.
        </p>
        <ReactPlayer
          controls={true}
          width="500px"
          height="300px"
          url="https://www.youtube.com/watch?v=v-dgpzE7txk&ab_channel=LeagueofLegends-France"
        />
      </Box>
    </div>
  );
};
export default Story;
