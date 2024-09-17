import en from './messages/en.json'
import ru from './messages/ru.json'

type Messages = typeof en & typeof ru

declare global {
  interface IntlMessages extends Messages {}
}
