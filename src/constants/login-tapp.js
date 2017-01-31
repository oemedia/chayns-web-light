import { getUrlParameters } from '../shared/utils/helper';

const loginUrl = {
    devBase: 'http://localhost:8080/',
    qaBase: 'https://tappqa.tobit.com/tapps/LoginTapp/',
    liveBase: 'https://tapp03.tobit.com/ChaynsWebLightLogin/',
    urlParameter: '?AppVersion=##version##&OS=##os##&colormode=##colormode##&color=##color##&apname=##apname##&tappid=-1'
};
export const LOGIN_TAPP = {
    id: -1,
    url: ((getUrlParameters().login === 'dev') ? loginUrl.devBase : (getUrlParameters().login === 'qa') ? loginUrl.qaBase : loginUrl.liveBase) + loginUrl.urlParameter,
};