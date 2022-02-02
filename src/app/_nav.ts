import {EUserRole} from './models';

interface NavAttributes {
    [propName: string]: any;
}
interface NavWrapper {
    attributes: NavAttributes;
    element: string;
}
interface NavBadge {
    text: string;
    variant: string;
}
interface NavLabel {
    class?: string;
    variant: string;
}

export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: NavBadge;
    title?: boolean;
    children?: NavData[];
    variant?: string;
    attributes?: NavAttributes;
    requiredRoles?: EUserRole[];
    divider?: boolean;
    class?: string;
    label?: NavLabel;
    wrapper?: NavWrapper;
    indent?: 1 | 2 | 3;
}

export const navItems: NavData[] = [
    {
        name: 'Home',
        url: '/home',
        icon: 'icon-home'
    },
    {
        name: 'Gepa Core',
        url: '/core',
        icon:'far fa-address-card',
        requiredRoles: [EUserRole.CORE_VALID, EUserRole.CORE_OPERATOR, EUserRole.CORE_TAV_OP1, EUserRole.CORE_TAV_OP2],
        children: [
            {
                name: 'Monitoraggio',
                url: '/core/monitoraggio',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.CORE_VALID, EUserRole.CORE_OPERATOR, EUserRole.CORE_TAV_OP1, EUserRole.CORE_TAV_OP2]
            },
            {
                name: 'Ricerca',
                url: '/core/ricerca',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.CORE_VALID, EUserRole.CORE_OPERATOR, EUserRole.CORE_TAV_OP1, EUserRole.CORE_TAV_OP2]
            }
        ]
    },
    {
        name: 'Anagrafiche',
        url: '/anagrafiche',
        icon: 'far fa-address-card',
        requiredRoles: [EUserRole.ANAGRAFICHE_VISUALIZZATORE],
        children: [
            {
                name: 'Party',
                url: '/anagrafiche/parties',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Conti',
                url: '/anagrafiche/conti',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Transcodifica Ingrosso',
                url: '/anagrafiche/ecctranscodingingrosso',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Transcodifica Dettaglio',
                url: '/anagrafiche/ecctranscodingretail',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Eccezioni Raggiungibilità Dettaglio',
                url: '/anagrafiche/eccreachabilityretail',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Task Queue',
                url: '/anagrafiche/taskqueue',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE, EUserRole.ANAGRAFICHE_DET]
            },
            {
                name: 'Transcodifica',
                url: '/anagrafiche/transcoding',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
            {
                name: 'Raggiungibilità',
                url: '/anagrafiche/reachability',
                icon: '',
                indent: 1,
                requiredRoles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
            },
        ]
    }
];
