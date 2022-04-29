/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from 'react';
import Sidebar from './Sidebar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('Sidebar', function () {
    it('Mount the component', () => {
        const links = [
            <div className="button-link" key="test/test">
                <Link className={'menu-text font-bold'} to={`/test`}>
                    test
                </Link>
            </div>,
        ];
        const { container } = render(
            <I18nextProvider i18n={i18n}>
                <Router>
                    <Sidebar links={links} />
                </Router>
            </I18nextProvider>,
        );
        expect(container.getElementsByClassName('sidebar-wrapper').length).toBe(1);
    });
});
