import Enzyme from 'enzyme';
//Enzyme adapter for React 17 has not been published yet
//Using an "unofficial" Enzyme adapter that does the job for now
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });