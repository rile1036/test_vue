<template>
<div class="container">
  <h2>Todo List</h2>
  <div class="input-group" style="margin-bottom:10px;">
	<input type="text" class="form-control" 
		placeholder="할일을 입력하세요" 
		v-model="name" 
		v-on:keyup.enter="createTodo(name)">
	<span class="input-group-btn">
		<button class="btn btn-default" type="button" 
		@click="createTodo(name)">추가</button>
	</span>
</div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, index) in todo_list" v-bind:key="todo">
    {{todo.name}}
	<div class="btn-group pull-right" 
		style="font-size: 12px; line-height: 1;">
		<button type="button" 
		class="btn-link dropdown-toggle" 
		data-toggle="dropdown" 
		aria-haspopup="true" 
		aria-expanded="false">
			더보기<span class="caret"></span>
		</button>
		<ul class="dropdown-menu">
			<li>
              <a href="#" @click="deleteTodo(index)">삭제</a>
            </li>
		</ul>
	</div>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
  name: 'Todo',
  data(){ 
	return {
	todo_list: []
	}
  },
  mounted(){
    this.getTodos();
  },
  methods:{
		deleteTodo(todo){
	    var vm = this
	    this.todolist.forEach(function(_todo, i, obj){
		if(_todo.id === todo.id){
			vm.$http.delete('http://localhost:8080'+todo.id)
			.then((result) => {
					obj.splice(i, 1)
			    })	
		        }
	        })
        },
        createTodo(name){
            if(name != null){
                var vm = this;
                this.$http.defaults.headers.post['Content-Type'] = 'application/json';
                this.$http.post('http://localhost:8080',{
                    name:name
                }).then((result) => {
                        vm.todo_list.push(result.data);
                })
                this.name = null
            }
        },
        getTodos(){
            var vm = this;
            axios.get('http://localhost:8080')
            .then((result) => {
                    vm.todo_list = result.data.data;
            })
        }     
	}
}
</script>

