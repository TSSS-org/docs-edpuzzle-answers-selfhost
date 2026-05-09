/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/easy-linux-mac',
        'installation/easy-windows',
        'installation/manual-linux-mac',
        'installation/manual-windows',
      ],
    },
    'usage',
    'configuration',
    'troubleshooting',
    'faq',
  ],
};

export default sidebars;