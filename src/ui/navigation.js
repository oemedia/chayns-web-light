import htmlToElement from 'html-to-element';
import { getUrlParameters } from '../utils/helper';
import loadTapp from '../tapp/custom-tapp';
import NAVIGATION_ITEMS from '../constants/navigation-items';

let $navigation = null;

export default class Navigation {
    static init() {
        if (getUrlParameters().navigation === '1') {
            Navigation.show();
        }
    }

    static show() {
        if (!$navigation) {
            $navigation = getNavigationElement();
            document.body.appendChild($navigation);
        }
        $navigation.classList.remove('hidden');
    }

    static hide() {
        if ($navigation) {
            $navigation.classList.add('hidden');
        }
    }

    static disableTappId(tappId, disable = true) {
        NAVIGATION_ITEMS.forEach((item) => {
            if (item.tappId === tappId) {
                item.disabled = disable;
            }
        });

        if ($navigation) {
            $navigation.parentElement.removeChild($navigation);
            $navigation = getNavigationElement();
            document.body.appendChild($navigation);
        }
    }
}


function getNavigationElement() {
    const $newNavigation = htmlToElement('<div class="navigation"><ul></ul></div>');

    NAVIGATION_ITEMS.forEach((item) => {
        if (!item.disabled) {
            const $navItem = htmlToElement(`<li class="navigation__element">
                                           <span class="ChaynsIdIcon fa ${item.icon}"></span>
                                       </li>`);

            $navItem.addEventListener('click', () => loadTapp(item.tappId));

            $newNavigation.firstChild.appendChild($navItem);
        }
    });

    return $newNavigation;
}
