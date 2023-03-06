<template>
  <div @click="login()">
    <button>Login via GitHub</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.log(error);
  }
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-radius: 5px;
  background-color: #075bf8c5;
  cursor: pointer;
  color: white;
}
</style>
