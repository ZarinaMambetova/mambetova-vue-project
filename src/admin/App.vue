<template>
  <headline title="Панель администрирования">
    <avatar :size="size" src="https://picsum.photos/300/300" />
  </headline>
</template>

<script>
import "../styles/main.pcss"; // подключили основные стили
import avatar from "./components/avatar/avatar.vue";
import headline from "./components/headline/headline.vue"; // импортируем нужные компоненты
export default {
  components: {
avatar, headline //указываем компоненты, которые будем использовать
  }
}
</script>