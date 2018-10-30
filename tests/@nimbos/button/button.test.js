import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import {t} from '../../../packages/@nimbos/strings/index.js';
import sinon from 'sinon';

import Button from '../../../packages/@nimbos/button';

describe ('<Button />', () => {
  //onClick
  it ('deve clicar o botão default', () => {
    const callback = sinon.fake ();
    const wrapper = shallow (
      <Button onClick={callback}>{t ('common.padrao')}</Button>
    );
    wrapper.simulate ('click');
    expect (callback.called).to.be.true;
  });

  //default
  it ('deve renderizar o botão default', () => {
    const wrapper = shallow (<Button>{t ('common.padrao')}</Button>);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default disabled', () => {
    const wrapper = shallow (
      <Button disabled>{t ('common.desabilitado')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //primary
  it ('deve renderizar o botão primary', () => {
    const wrapper = shallow (
      <Button flavor="primary">{t ('common.primario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primary disabled', () => {
    const wrapper = shallow (
      <Button flavor="primary" disabled>{t ('common.primario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //secundary
  it ('deve renderizar o botão secundary', () => {
    const wrapper = shallow (
      <Button flavor="secondary">{t ('common.secundario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundary disabled', () => {
    const wrapper = shallow (
      <Button flavor="secondary" disabled>{t ('common.secundario')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //info
  it ('deve renderizar o botão info', () => {
    const wrapper = shallow (
      <Button flavor="info">{t ('common.informacoes')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info disabled', () => {
    const wrapper = shallow (
      <Button flavor="info" disabled>{t ('common.informacoes')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //warning
  it ('deve renderizar o botão warning', () => {
    const wrapper = shallow (
      <Button flavor="warning">{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning default', () => {
    const wrapper = shallow (
      <Button flavor="warning" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //success
  it ('deve renderizar o botão success', () => {
    const wrapper = shallow (
      <Button flavor="success">{t ('common.sucesso')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning default', () => {
    const wrapper = shallow (
      <Button flavor="warning" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //danger
  it ('deve renderizar o botão danger', () => {
    const wrapper = shallow (
      <Button flavor="danger">{t ('common.perigo')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger default', () => {
    const wrapper = shallow (
      <Button flavor="danger" disabled>{t ('common.alerta')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //outlined
  it ('deve renderizar o botão outlined', () => {
    const wrapper = shallow (<Button outlined>{t ('common.outlined')}</Button>);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="info">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="info" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="warning">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="warning" disabled>
        {t ('common.outlined')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="success">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="success" disabled>
        {t ('common.outlined')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined', () => {
    const wrapper = shallow (
      <Button outlined flavor="danger">{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined disabled', () => {
    const wrapper = shallow (
      <Button outlined flavor="danger" disabled>{t ('common.outlined')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //flat
  it ('deve renderizar o botão flat', () => {
    const wrapper = shallow (<Button flat>{t ('common.flat')}</Button>);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão flat disabled', () => {
    const wrapper = shallow (
      <Button flat disabled>{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat', () => {
    const wrapper = shallow (
      <Button flat flavor="info">{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat disabled', () => {
    const wrapper = shallow (
      <Button flat flavor="info" disabled>{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat', () => {
    const wrapper = shallow (
      <Button flat flavor="warning">{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat disabled', () => {
    const wrapper = shallow (
      <Button flat flavor="warning" disabled>{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat', () => {
    const wrapper = shallow (
      <Button flat flavor="success">{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat disabled', () => {
    const wrapper = shallow (
      <Button flat flavor="success" disabled>{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat', () => {
    const wrapper = shallow (
      <Button flat flavor="danger">{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat disabled', () => {
    const wrapper = shallow (
      <Button flat flavor="danger" disabled>{t ('common.flat')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone
  it ('deve renderizar o botão default com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone primary
  it ('deve renderizar o botão primario com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="primary" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="primary">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario com icone  font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="primary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flavor="primary" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="primary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="primary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone secondary
  it ('deve renderizar o botão secundario com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="secondary" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="secondary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="secondary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary" />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="secondary">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone info
  it ('deve renderizar o botão info com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="info" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="info">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="info">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flavor="info" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="info">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="info">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone warning
  it ('deve renderizar o botão warning com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="warning" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="warning">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="warning">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flavor="warning" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="warning">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="warning">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone success
  it ('deve renderizar o botão success com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="success" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="success">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="success">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flavor="success" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="success">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="success">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone danger
  it ('deve renderizar o botão danger com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="danger" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="danger">{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="danger">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flavor="danger" />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="danger">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="danger">
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined
  it ('deve renderizar o botão default outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" outlined />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" outlined>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" outlined />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" outlined>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default outlined com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined primary
  it ('deve renderizar o botão primario outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="primary" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="primary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario outlined com icone  font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="primary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="primary" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="primary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario outlined com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="primary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined secondary
  it ('deve renderizar o botão secundario outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="secondary" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="secondary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="secondary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario outlined com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="secondary" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined info
  it ('deve renderizar o botão info outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="info" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="info" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="info" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="info" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="info" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info outlined com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="info" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined warning
  it ('deve renderizar o botão warning outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="warning" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="warning" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="warning" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="warning" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="warning" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning outlined com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="warning" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined success
  it ('deve renderizar o botão success outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="success" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="success" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="success" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="success" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="success" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success outlined com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="success" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone outlined danger
  it ('deve renderizar o botão danger outlined com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="danger" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="danger" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="danger" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="danger" outlined />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger outlined com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="danger" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });
  it ('deve renderizar o botão danger outlined com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="danger" outlined>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat
  it ('deve renderizar o botão default flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flat />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flat>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default flat com icone material cloud sem texto', () => {
    const wrapper = shallow (<Button icon="mdi mdi-cloud" flat />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flat>{t ('common.icone')}</Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão default flat com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat primary
  it ('deve renderizar o botão primario flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="primary" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="primary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario flat com icone  font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="primary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="primary" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="primary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão primario flat com icone  material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="primary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat secondary
  it ('deve renderizar o botão secundario flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="secondary" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="secondary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="secondary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="secondary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão secundario flat com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="secondary" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat info
  it ('deve renderizar o botão info flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (<Button icon="fas fa-cloud" flavor="info" flat />);
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="info" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="info" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="info" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="info" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão info flat com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="info" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat warning
  it ('deve renderizar o botão warning flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="warning" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="warning" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="warning" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="warning" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="warning" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão warning flat com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="warning" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat success
  it ('deve renderizar o botão success flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="success" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="success" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="success" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="success" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="success" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão success flat com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="success" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  //icone flat danger
  it ('deve renderizar o botão danger flat com icone font awesome cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="danger" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat com icone font awesome cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" flavor="danger" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat com icone font awesome cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="fas fa-cloud" iconRight flavor="danger" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat com icone material cloud sem texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="danger" flat />
    );
    expect (wrapper).to.matchSnapshot ();
  });

  it ('deve renderizar o botão danger flat com icone material cloud com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" flavor="danger" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });
  it ('deve renderizar o botão danger flat com icone material cloud do lado direito com texto', () => {
    const wrapper = shallow (
      <Button icon="mdi mdi-cloud" iconRight flavor="danger" flat>
        {t ('common.icone')}
      </Button>
    );
    expect (wrapper).to.matchSnapshot ();
  });
});
