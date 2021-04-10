import headline from './headline.vue'; //импортируем данные из vue-файла
import { action } from '@storybook/addon-actions'; // импортируем аддон для распознавания методов

const methods = {
  onAction: action('onAction')
};

export default {
  title: 'headline', //имя компонента
  components: { headline } // компонент
};

// обычное состояние компонента
export const defaultView = () => ({
  components: { headline }, // Объявили компонент
  template: ` 
  <headline title="Панель администрирования" @action="onAction">
  </headline>
  `,
  methods
});

defaultView.story = {
  name: 'Стандартный вид'
};
