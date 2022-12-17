module.exports = {
  title: 'Мой бюджет',
  description: 'Мой Бюджет - сервис для ведения семейного бюджета и домашней бухгалтерии. Инструмент для учета повседневных доходов и расходов.',
  lang: 'ru-RU',
  head: [
    // ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    // ['link', { rel: 'fluid-icon', href: '/images/favicon-144.png' }],
    ['link', { rel: 'icon', href: '/images/favicon-144.png' }],
  ],
  themeConfig: {
    // logo: 'https://2.mybudget.ws/favicon-144.png'
    sidebar: [
      {
        text: 'История изменений',
        link: '/changelog/README.md',
        children: [
          '2022-01-01-сводная-таблица-под-графиком-доходы-и-расходы.md',
          '2021-12-19-выбор-графика-и-период-сохраняется.md',
          '2021-12-10-возможность-задать-свой-интервал-в-отчетах.md',
          '2021-11-17-разбивка-операций-по-месяцам.md',
        ],
      },
    ],
  }
}
