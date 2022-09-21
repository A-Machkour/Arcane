import heimerdingerlab from "../../assets/img/envar-studio-heimerdingerlab-final.jpg";

const Separator = () => {
  return (
    <div className="separator container">
      <div data-aos="fade-up" data-aos-duration="3000">
        <img
          src={heimerdingerlab}
          alt="heimerdingerlab"
          className="imgHeimerdingerlab"
        />
        {/* <img src={landing} alt="landing" className='imgLanding'/> */}
      </div>
      {/* <span className="vertical"></span> */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="3000"
        className="quoteBorder"
      >
        <h1 className="quote">
          "Arcane est complètement fou, des ambitions démesurées qui sont
          explosées sur tous les tableaux, un style visuel unique, une patte
          graphique à rendre jaloux Sony Pictures"
        </h1>{" "}
        - IGN
      </div>
    </div>
  );
};
export default Separator;
