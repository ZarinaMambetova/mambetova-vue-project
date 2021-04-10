import avatar from './avatar.vue';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'avatar',
  components: { avatar },
  decorators: [ withKnobs ]
};

export const defaultView = () => ({
  components: { avatar },
  props: {
    title: {
      default: text('Username', 'Default Name')
    },
    size: {
      default: text('size', '3.1')
    }
  },
  template: `
    <avatar :title="title"
    :size="size" src="https://picsum.photos/300/300"
    />
  `
});

defaultView.story = {
  name: 'Стандартный вид'
};
