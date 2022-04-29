/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import SelectLanguage from './SelectLanguage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';

describe('SelectLanguage', function () {
    it('Mount the component', () => {
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <SelectLanguage />
            </I18nextProvider>,
        );
        expect(container.getElementsByTagName('select')).toBe(1);
    });
});
