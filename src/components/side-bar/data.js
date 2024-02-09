import { AnalyticsOutlined, ArrowOutwardOutlined, AssessmentOutlined, DescriptionOutlined, HomeOutlined, NearMeOutlined, PaymentOutlined, Person2Outlined } from '@mui/icons-material';

export const data = [
    {
        id: 1,
        title: 'Home',
        icon: <HomeOutlined style={{ fontSize: '20px' }} />,
        route: '/'
    },
    {
        id: 2,
        title: 'Payouts',
        icon: <ArrowOutwardOutlined style={{ fontSize: '20px' }} />,
        route: '/payouts'
    },
    {
        id: 3,
        title: 'Account Statement',
        icon: <DescriptionOutlined style={{ fontSize: '20px' }} />,
        route: '/account-statement'
    },
    {
        id: 4,
        title: 'Contacts',
        icon: <Person2Outlined style={{ fontSize: '20px' }} />,
        route: '/contacts'
    },
    {
        id: 5,
        title: 'Vendor Payments',
        icon: <AssessmentOutlined style={{ fontSize: '20px' }} />,
        route: '/vendor-payments'
    },
    {
        id: 6,
        title: 'Tax Payments',
        icon: <AssessmentOutlined style={{ fontSize: '20px' }} />,
        route: '/tax-payments'
    },
    {
        id: 7,
        title: 'Payout Links',
        icon: <NearMeOutlined style={{ fontSize: '20px' }} />,
        route: '/payout-links'
    },
    {
        id: 8,
        title: 'Payroll',
        icon: <PaymentOutlined style={{ fontSize: '20px' }} />,
        route: '/payroll'
    },
    {
        id: 9,
        title: 'Reports',
        icon: <AnalyticsOutlined style={{ fontSize: '20px' }} />,
        route: '/reports'
    },

];

