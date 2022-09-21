import A from '../../assets/img/Arcane-01.png';
import R from '../../assets/img/Arcane-02.png';
import C from '../../assets/img/Arcane-03.png';
import N from '../../assets/img/Arcane-05.png';
import E from '../../assets/img/Arcane-06.png';
import Box from '@mui/material/Box';

const Title = () => {
    return (
        <div className='bgImg'>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh' }}>
                <img src={A} alt="logo A" className='anim1 logoTitle'/>
                <img src={R} alt="logo R" className='anim2 logoTitle'/>
                <img src={C} alt="logo C" className='anim3 logoTitle'/>
                <img src={A} alt="logo A" className='anim4 logoTitle'/>
                <img src={N} alt="logo N" className='anim5 logoTitle'/>
                <img src={E} alt="logo E" className='anim6 logoTitle'/>
            </Box>
        </div>
    );
};
export default Title;

