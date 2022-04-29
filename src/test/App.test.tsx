// import * as React from 'react';
// import * as Renderer from 'react-test-renderer';
// import Main from '../Main';
// import {render} from "@testing-library/react";
// import {I18nextProvider} from "react-i18next";
// import i18n from "../../config/i18n/i18n";
// import {BrowserRouter as Router} from "react-router-dom";
// import Sidebar from "../components/Sidebar/Sidebar";
//
// jest.mock(
//     'RickAndMorty/routes',
//     () => ({
//         default: [
//             {
//                 path: '/',
//                 component: {
//                     _payload: {
//                         _status: 1,
//                     },
//                 },
//                 title: 'RickAndMorty',
//                 exact: true,
//             },
//         ],
//     }),
//     { virtual: true },
// );
//
// jest.mock(
//     'RickAndMorty/Main',
//     () => ({
//         default: <label>RickAndMorty</label>,
//     }),
//     { virtual: true },
// );
//
// // it('correctly renders app component', () => {
// //     const { container } = render(
// //         <I18nextProvider i18n={i18n}>
// //             <Router>
// //                 <Sidebar links={links} />
// //             </Router>
// //         </I18nextProvider>,
// //     );
// //     expect(container.getElementsByClassName('sidebar-wrapper').length).toBe(1);
// // });
