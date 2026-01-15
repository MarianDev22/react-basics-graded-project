import lachacha from '@assets/chacha-alicantina.jpg'
import './logo.css'

export const Logo: React.FC = () => {
    return (
        <div>
        <a href="https://react.dev" target="_blank">
          <img src={lachacha} className="applogo" alt="LaChaCha logo " />
        </a>
        </div>
    );
};