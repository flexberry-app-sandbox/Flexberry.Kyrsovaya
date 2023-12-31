export default {
  projections: {
    Транзакция_E: {
      номер: {
        __caption__: 'Номер'
      },
      клиент_: {
        __caption__: 'ФИО',
        фИО: {
          __caption__: 'ФИО'
        }
      },
      билеты: {
        __caption__: 'Билеты',
        пунктОтпр: {
          __caption__: 'Пункт отпр'
        },
        пунктНазнач: {
          __caption__: 'Пункт назначения'
        }
      }
    },
    Транзакция_L: {
      номер: {
        __caption__: 'Номер'
      },
      билеты: {
        __caption__: 'Пункт отпр',
        пунктОтпр: {
          __caption__: 'Пункт отпр'
        },
        пунктНазнач: {
          __caption__: ''
        }
      },
      клиент_: {
        __caption__: 'Банк счет',
        банкСчет: {
          __caption__: 'Банк счет'
        },
        фИО: {
          __caption__: ''
        }
      }
    }
  },
  validations: {
    номер: {
      __caption__: 'Номер'
    },
    билеты: {
      __caption__: 'Билеты'
    },
    клиент_: {
      __caption__: 'ФИО'
    }
  }
};
