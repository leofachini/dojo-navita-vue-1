<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
      <div v-for="user in users" :key="user.id">
        <span class="id">{{ user.id | money }}</span> <br>
        <span class="name">{{ user.name }}</span> <br>
        <span class="email">{{ user.email }}</span> <br>
      </div>
    <br>
    <div class="form-container">
      <input type="text">
      <dojo-button
        @click="save()">
        <template #icon>
          *
        </template>
        Salvar
      </dojo-button>
    </div>
  </div>
</template>

<script>
import DojoButton from '@/components/DojoButton.vue';
import UserService from '@/api/users.api';

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    DojoButton,
  },
  methods: {
    async doGet() {
      const { data } = await UserService.getUsers();
      this.users = data;
    },
    save() {
      console.log('Salvar');
    },
  },
  created() {
    this.doGet();
  },
};
</script>

<style scoped lang="less">

div.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  div.form-item {
    align-items: center;
    display: flex;
    justify-content: center;
    input,
    button {
      flex-grow: 1;
    }
  }
}
</style>
