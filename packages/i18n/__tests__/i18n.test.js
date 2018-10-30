'use strict';
import i18n from '..';
import { expect } from 'chai';

describe('@nimbos/i18n', () => {
	beforeEach(() => {
		i18n.reset();
	});

	it('Register a key', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: 'Olá Mundo!'
		});

		const translated = i18n('HELLO_WORLD');

		expect(translated).to.equal('Olá Mundo!');
	});

	it('Register a key in another language', () => {
		i18n.lang('emoji');

		i18n.register('pt-BR', {
			HELLO_WORLD: 'Olá Mundo!'
		});

		i18n.register('emoji', {
			HELLO_WORLD: '✋ 🌎!'
		});

		const translated = i18n('HELLO_WORLD');

		expect(translated).to.equal('✋ 🌎!');
	});

	it('Register a key with variable', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: 'Olá {name}!'
		});

		const translated = i18n('HELLO_WORLD', { name: '🌎' });

		expect(translated).to.equal('Olá 🌎!');
	});

	it('Register a key with params', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: 'Olá {0}!'
		});

		const translated = i18n('HELLO_WORLD', '🌎');

		expect(translated).to.equal('Olá 🌎!');
	});

	it('Register a countable vars', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: [ 'Sem items!', 'Um item!', '{count} items!' ]
		});

		const zeroItemsTranslated = i18n('HELLO_WORLD', { count: 0 });
		const oneItemsTranslated = i18n('HELLO_WORLD', { count: 1 });
		const manyItemsTranslated = i18n('HELLO_WORLD', { count: 4 });

		expect(zeroItemsTranslated).to.equal('Sem items!');
		expect(oneItemsTranslated).to.equal('Um item!');
		expect(manyItemsTranslated).to.equal('4 items!');
	});

	it('Register a countable params', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: [ 'Sem items!', 'Um item!', '{0} items!' ]
		});

		const zeroItemsTranslated = i18n('HELLO_WORLD', 0);
		const oneItemsTranslated = i18n('HELLO_WORLD', 1);
		const manyItemsTranslated = i18n('HELLO_WORLD', 4);

		expect(zeroItemsTranslated).to.equal('Sem items!');
		expect(oneItemsTranslated).to.equal('Um item!');
		expect(manyItemsTranslated).to.equal('4 items!');
	});

	it('Register a countable params changed lang', () => {
		i18n.register('pt-BR', {
			HELLO_WORLD: [ 'Sem items!', 'Um item!', '{0} items!' ]
		});

		i18n.register('emoji', {
			HELLO_WORLD: [ '⭕!', '📍!', '📍📍!', '{0} 🔢!' ]
		});

		const zeroItemsTranslated = i18n('HELLO_WORLD', 0);
		const oneItemsTranslated = i18n('HELLO_WORLD', 1);
		const manyItemsTranslated = i18n('HELLO_WORLD', 3);
		i18n.lang('emoji');
		const manyOnEmojiItemsTranslated = i18n('HELLO_WORLD', 3);

		expect(zeroItemsTranslated).to.equal('Sem items!');
		expect(oneItemsTranslated).to.equal('Um item!');
		expect(manyItemsTranslated).to.equal('3 items!');
		expect(manyOnEmojiItemsTranslated).to.equal('3 🔢!');
	});
});
