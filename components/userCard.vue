<template>
  <div class="profile" v-if="user">
    <img class="profile-pic" :src="pfp"/>
    <div style="display: flex; flex-direction: column; gap: 10px; height: fit-content;">
      <div class="profile-name">{{ name }}</div>
      <p @click="logout" style="margin: 0px;">Log out</p>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.log(error);
    return;
  }

  await navigateTo("/login");
};

const name = computed(() => user.value?.user_metadata.user_name);
const pfp = computed(() => user.value?.user_metadata.avatar_url);
</script>

<style scoped>
.profile {
  width: 130px;
  height: 50px;
  background-color: #d8d5d59f;
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 10px;
}
.profile-pic {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
</style>
