import React from 'react';
import {expect} from 'chai';
import {t} from '../../../packages/@nimbos/strings/index.js';

import Text from '../../../packages/@nimbos/entry/Text';

it ('deve renderizar o input text com label', () => {
  const wrapper = shallow (<Text id="Nome" label={t ('common.titulo')} />);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label desabilitado', () => {
  const wrapper = shallow (
    <Text id="Nome" label={t ('common.titulo')} disabled />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label com placeholder', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label desabilitado com placeholder', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      disabled
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label', () => {
  const wrapper = shallow (<Text id="Nome" />);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label desabilitado', () => {
  const wrapper = shallow (<Text id="Nome" disabled />);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label com placeholder', () => {
  const wrapper = shallow (
    <Text id="Nome" placeholder={t ('common.placeholder')} />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text sem label desabilitado com placeholder', () => {
  const wrapper = shallow (
    <Text id="Nome" placeholder={t ('common.placeholder')} disabled />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto', () => {
  const wrapper = shallow (<Text id="Nome" label />);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto desabilitado', () => {
  const wrapper = shallow (<Text id="Nome" label disabled />);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto com placeholder', () => {
  const wrapper = shallow (
    <Text id="Nome" label placeholder={t ('common.placeholder')} />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label sem texto desabilitado com placeholder', () => {
  const wrapper = shallow (
    <Text id="Nome" label placeholder={t ('common.placeholder')} disabled />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em px com placeholder', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="200px"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em rem com placeholder', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="12rem"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label e width em % com placeholder', () => {
  const wrapper = shallow (
    <Text
      id="Nome"
      label={t ('common.titulo')}
      placeholder={t ('common.placeholder')}
      width="50%"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label com placeholder e ícone a esquerda', () => {
  const wrapper = shallow (
    <Text
      label={t ('common.label')}
      placeholder={t ('common.placeholder')}
      iconLeft="fas fa-cloud"
      id="Nome"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label com placeholder e ícone a direito', () => {
  const wrapper = shallow (
    <Text
      label={t ('common.label')}
      placeholder={t ('common.placeholder')}
      iconRight="fas fa-cloud"
      id="Nome"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar o input text com label com placeholder e ícone a direito e a esquerda', () => {
  const wrapper = shallow (
    <Text
      label={t ('common.label')}
      placeholder={t ('common.placeholder')}
      iconRight="fas fa-cloud"
      iconLeft="fas fa-cloud"
      id="Nome"
    />
  );
  expect (wrapper).to.matchSnapshot ();
});
