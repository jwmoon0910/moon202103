<template>
  <div class="TodoList">
    <h5>This is a TodoList</h5>
    <TodoHeader></TodoHeader>
    <!-- <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter> -->
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
// import TodoInput from "@/components/TodoInput.vue";
// import TodoList from "@/components/TodoList.vue";
// import TodoFooter from "@/compo nents/TodoFooter.vue";
export default {
  name: "TodoList",
  components: { TodoHeader },
};
</script>
