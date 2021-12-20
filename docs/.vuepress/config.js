module.exports = {
  title: 'Мой бюджет',
  lang: 'ru-RU',
  themeConfig: {
    // logo: 'https://2.mybudget.ws/favicon-144.png'

    sidebar: [
      {
        text: 'История изменений',
        link: '/changelog/README.md',
        children: [
          '2021-12-19-выбор-графика-и-период-сохраняется.md',
          '2021-12-10-возможность-задать-свой-интервал-в-отчетах.md',
        ],
      },
    ],
  }
}
