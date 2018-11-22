//** eslint-disabled */
import Enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

chai.use(chaiJestSnapshot);

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Pula as mensagens de aviso do 'createElement'
// Mas retorna um erro para qualquer outra
console.error = message => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};

Enzyme.configure({ adapter: new Adapter() });
