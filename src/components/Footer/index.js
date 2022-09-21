import netflix from '../../assets/img/netflix.png';

const Footer = () => {
    return (
        <footer>
            <span>Disponible maintenant </span>
            <a href='https://www.netflix.com/fr/title/81435684' target="_blank" rel="noopener noreferrer"><img src={netflix} alt="netflix"/></a>
        </footer>
    );
};
export default Footer;

