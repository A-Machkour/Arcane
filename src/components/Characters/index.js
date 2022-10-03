import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import caitlyn from "../../assets/img/characters/caitlyn.png";
import jinx from "../../assets/img/characters/jinx.png";
import vi from "../../assets/img/characters/vi.png";
import heimer from "../../assets/img/characters/heimer.png";
import viktor from "../../assets/img/characters/viktor.png";

const Characters = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="characters">
      <h1 className="characTitle">Les personnages</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="charactersLineColor"
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <img src={jinx} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jinx/Powder:<br></br>
            Nous apprenons d’abord à connaître Jinx sous son vrai nom : Petite
            fille, elle s’appelait Powder. Elle est la petite sœur de Vi, qui
            fait des efforts et veut être utile, mais qui, en général, aggrave
            les choses. À la suite d’une erreur tragique, elle est poussée sur
            un chemin sombre de la vie et rejoint l’impitoyable Silco à Zhaun.
            Elle n’a d’égard pour personne, pas même pour ses camarades. Elle
            aime faire exploser des choses et semer le chaos et la destruction,
            mais derrière la façade se cachent de profonds problèmes mentaux.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <img src={vi} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vi:<br></br>
            Vi est l’un des personnages principaux. Elle est orpheline de la
            misérable ville souterraine de Zhaun et est adoptée avec sa sœur
            Powder par l’ancien gangster Vander. Elle se bat littéralement pour
            se frayer un chemin dans les ruelles dangereuses, aussi bien avec
            des mots qu’avec ses poings puissants. En fait, elle veut seulement
            protéger sa petite sœur. Mais Powder s’avère être un baril de poudre
            explosif.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <img src={caitlyn} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Caitlyn:<br></br>
            La jeune exécuteur vient d’une maison de haut rang de Piltover mais
            n’a pas peur de se salir les mains. Elle est déterminée à assurer la
            sécurité et la justice et prend de grands risques pour y parvenir.
            Par exemple, en libérant le célèbre Vi de prison. Une camaraderie
            inattendue se développe entre les deux – et peut-être même un peu
            plus…
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <img src={heimer} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Heimerdinger:<br></br>
            Le professeur de l’Académie de Piltover siège au conseil municipal
            et y est généralement la voix de la raison. Au cours de ses 300 ans
            de vie, il a déjà vécu beaucoup de choses, par exemple les luttes de
            pouvoir brutales entre mages. Il veut à tout prix éviter qu’une
            telle catastrophe ne se reproduise à Piltover, même s’il doit aller
            à l’encontre de ses propres élèves pour y parvenir. D’ailleurs, il
            appartient à l’espèce petite mais robuste des Yordle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <img src={viktor} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Viktor:<br></br>
            Il sur la nouvelle technologie hexagonale qui rendra la magie
            accessible à tous. Viktor souffre d’une maladie grave qui a fait de
            lui un marginal dans son enfance et qui menace désormais sa vie.
            Avant de mourir, il veut désespérément créer quelque chose de grand
            qui aidera les gens qui souffrent – pour qu’on se souvienne de lui.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Characters;
