import Button from '@material-ui/core/Button';
import { FiDownload } from 'react-icons/fi';
import Link from '@material-ui/core/Link';

const Cv = () => {
  return (
    <Link href="nazimmusayev.pdf" target="_blank" download underline="none">
      <Button variant="outlined" color="secondary" size="small" endIcon={<FiDownload />}>
        CV 
      </Button> 
    </Link> 
  )
};

export default Cv;
