import { TITTLE_MENU } from '../../utils/constants';
import SelectLanguage from '../../components/SelectLanguage/SelectLanguage';
import { useTranslation } from 'react-i18next';
import React from 'react';
import './Sidebar.scss';

const Sidebar = (props: { links: any }) => {
    const { links } = props;
    const { t } = useTranslation();
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-wrapper_microfront">
                <div className="sidebar-wrapper_microfront--title">{TITTLE_MENU}</div>
                {links}
            </div>
            <div className="sidebar-wrapper_about">
                <SelectLanguage />
            </div>
        </div>
    );
};

export default Sidebar;
