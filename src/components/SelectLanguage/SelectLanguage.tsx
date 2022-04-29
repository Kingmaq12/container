import React from 'react';
import i18n from '../../../config/i18n/i18n';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
    const { t } = useTranslation();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    const options = [
        { label: t('language.es'), value: 'es' },
        { label: t('language.en'), value: 'en' },
    ];
    return (
        <>
            <select
                value={i18n.language}
                onChange={(e) => {
                    changeLanguage(e.target.value);
                }}
            >
                {options.map(({ label, value }) => {
                    return (
                        <option key={label + value} value={value}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default SelectLanguage;
