import React from 'react';
import {expect} from 'chai';
import {t} from '../../../packages/@nimbos/strings/index.js';

import Label from '../../../packages/@nimbos/entry/Label';

it ('deve renderizar a label com texto ', () => {
  const wrapper = shallow (<Label>{t ('common.titulo')}</Label>);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar a label sem texto ', () => {
  const wrapper = shallow (<Label></Label>);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar a label com texto e htmlFor  ', () => {
  const wrapper = shallow (<Label htmlFor="rotulo">{t ('common.titulo')}</Label>);
  expect (wrapper).to.matchSnapshot ();
});

it ('deve renderizar a label sem texto e htmlFor  ', () => {
  const wrapper = shallow (<Label htmlFor="rotulo"></Label>);
  expect (wrapper).to.matchSnapshot ();
});







